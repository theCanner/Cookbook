import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }


  validateEmail(e:any){
    if (!this.email.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
      this.emailInvalid = true
      this.validateField()
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
  

  proceed(){
    this.router.navigate(['/dashboard'])
  }
}
