import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { AuthenticationService } from './../authentication.service';
import { Router } from '@angular/router';
import { CustomValidatorsService } from './../validator/custom-validators.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginUserForm:FormGroup;
  loginlist:any = [];
  
  submitted = false;

  constructor(private service:AuthenticationService,private router:Router, private formBuilder:FormBuilder, private customValidator:CustomValidatorsService) { }

  ngOnInit(){

    // reactive form group
    this.loginUserForm=this.formBuilder.group({
      username:['',[Validators.required,  Validators.minLength(6)]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginUserForm.controls; }


  loginRegisteredUser(){
    this.submitted = true;
    if(this.loginUserForm.invalid){
      return;
    }
    this.service.loginUser(this.loginUserForm.value).subscribe(result=>{

      console.log(result)
      sessionStorage.setItem('token',result.token)
      this.loginUserForm.reset()
      this.router.navigate(['/take-quiz'])
     
    },
    err=>console.log(err)
    )

  }


}
