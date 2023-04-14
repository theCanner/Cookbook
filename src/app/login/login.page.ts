import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // email : string = ''
  // password : string = ''
  emailInvalid : boolean = false
  disableButton :boolean = true
  loginForm: FormGroup
  
  constructor(
    private router:Router,
    private formbuilder:FormBuilder
    ) {
      this.loginForm = this.formbuilder.group({
        email: new FormControl('',
                Validators.compose([
                          Validators.required,
                          Validators.pattern(/[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/)
                        ])),
        password: new FormControl('',[Validators.required,Validators.minLength(4)]),
      })
     }

  ngOnInit() {
  }


  get f(): any {
    return this.loginForm.controls;
}

  validateEmail(e:any){
    // if (!this.email.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
    //   this.emailInvalid = true
    //   this.validateField()
    //   return
    // }else { 
    //   this.emailInvalid = false
    //   this.validateField()
    //   return 
    // }
  }

  validateField(){
    console.log(this.f.password.invalid  && this.f.password.touched)
    // if(!this.emailInvalid && this.password.length >  0 ){
    //     this.disableButton = false
    //     return
    // }else {
    //   this.disableButton = true
    // }
  }
  

  proceed(){
    this.router.navigate(['/dashboard'])
  }
}
