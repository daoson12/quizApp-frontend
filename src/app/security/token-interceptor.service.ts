import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';



@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private service:AuthenticationService) { }


  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
  let tokenizedReq=req.clone({
    setHeaders:{
      Authorization: `Basic ${this.service.getToken()}`
    }
  })
  return next.handle(tokenizedReq)
  }
 
}
