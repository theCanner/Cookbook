import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LoginPage } from './login/login.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public rootPage: any;
  constructor(
    private platform:Platform
    
  ) {
    


    this.platform.ready().then(()=>{
      this.rootPage = LoginPage;
    })
  }
}
