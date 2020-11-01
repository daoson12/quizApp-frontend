import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/security/authentication.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {
  loginlist:any = [];
  takeTest=[] 
  
  loginUserForm:FormGroup;

  constructor(private service:AuthenticationService,private router:Router, ) { }

  ngOnInit() {
    this.service.gettest().subscribe(
      res=> this.takeTest=res,
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.router.navigate(['/sign-in'])
          }
        }
      }
    )
  }


  }


