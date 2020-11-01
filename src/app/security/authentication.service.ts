import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _registerUrl="http://localhost:2000/api/register"
  private _loginUrl ="http://localhost:2000/api/login"
  private _takeTest="http://localhost:2000/api/take-test"

  constructor(private http: HttpClient, private router:Router) { }

// conneting a registered user from the frontend and saving it to the backend api
  saveRegisteredUser(user){
   return this.http.post<any>(this._registerUrl,user)
  }

  // conneting a login user from the frontend and saving it to the backend api
  loginUser(user){
    return this.http.post<any>(this._loginUrl,user)  
   }


   gettest(){
    return this.http.get<any>(this._takeTest)
  }
  //  auth gaurd implementation
  loggedIn(){
    return !!sessionStorage.getItem('token')

  }
  // if user clicks on logoutUser method it should return the user to login and clear token on session storage
  logoutUser(){
     sessionStorage.removeItem('token')
    this.router.navigate(['/'])

  }
  getToken(){
    return sessionStorage.getItem('token ')
  }
}
