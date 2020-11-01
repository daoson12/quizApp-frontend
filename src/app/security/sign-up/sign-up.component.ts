import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './../authentication.service';
import { Router } from '@angular/router';
import { CustomValidatorsService } from './../validator/custom-validators.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registrationFormGroup:FormGroup;
  submitted= false;
  constructor(private service:AuthenticationService,private router:Router, private formBuilder:FormBuilder, private customValidator:CustomValidatorsService) { }

  ngOnInit(){

    // reaxtive form group
    this.registrationFormGroup =this.formBuilder.group({
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6)],],
      firstName:['', [Validators.required]],
      surname:['', [Validators.required]],
      confirmpassword:['',[Validators.required]],
      _id:[]
    },
    {
      validator: this.customValidator.MatchPassword('password', 'confirmpassword'),
    }
    
    )
  }


  
    // convenience getter for easy access to form fields
    get f() { return this.registrationFormGroup.controls; }

  registerUser(){
    this.submitted = true;
    if(this.registrationFormGroup.invalid){
      return;
    }
    this.service. saveRegisteredUser(this.registrationFormGroup.value).subscribe(result=>{
      console.log(result)
      // sessionStorage.setItem('token',result.token)
      this.registrationFormGroup.reset();
      this.router.navigate(['/sign-in'])
    },
    err=>console.log(err)
    )


  }

}
