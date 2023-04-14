import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  constructor(private modalController:ModalController,private navParams:NavParams) { }
  recipes: any;
  ngOnInit() {

    this.recipes = this.navParams.get('data');
    console.log(this.recipes)
  }

  dismiss(){
    this.modalController.dismiss()
  }

}
