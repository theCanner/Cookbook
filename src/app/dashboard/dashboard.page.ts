import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecipePage } from '../modal/recipe/recipe.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


  recipes = [
        {id:0,name:'Sample dish 1',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet',ratings:'5.0',time:'1',image:'/assets/images/dish1.png'},
        {id:1,name:'Sample dish 2',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet',ratings:'5.0',time:'1',image:'/assets/images/dish2.png'},
        {id:2,name:'Sample dish 3',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet',ratings:'5.0',time:'1',image:'/assets/images/dish3.webp'}
  ]

  constructor(
    private modalController:ModalController
  ) { }

  ngOnInit() {
  }

  search(){
    console.log('yes')
  }


 async viewRecipe(recipe:any){
    const modal = await this.modalController.create({
      component:RecipePage,
      componentProps:{
        data:recipe
      },
      cssClass: 'recipe-modal'
    });
    return await modal.present()
  }

  dismiss(){
    this.modalController.dismiss({
      'dismissed':'true'
    })

  }
}
