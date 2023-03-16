import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email : string = ''
  password : string = ''
  emailInvalid : boolean = false
  disableButton :boolean = true
  constructor() { }

  ngOnInit() {
  }


  validateEmail(e:any){
    if (!this.email.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
      this.emailInvalid = true
      return
    }else { 
      this.emailInvalid = false
      this.validateField()
      return 
    }
  }

  validateField(){
    if(!this.emailInvalid && this.password.length >  0 ){
        this.disableButton = false
        return
    }else {
      this.disableButton = true
    }
  }
  

  loggedIn(){
    console.log('loggedin')
  }
}
