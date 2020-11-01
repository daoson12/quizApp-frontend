import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { HomeComponent } from './layout/home/home.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';
import { TakeQuizComponent } from './component/take-quiz/take-quiz.component';
import { CoursesComponent } from './component/courses/courses.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { SignInComponent } from './security/sign-in/sign-in.component';
import { QuestionsComponent } from './component/questions/questions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from './security/authentication.service';
import { AuthGuard } from './security/auth.guard';
import { TokenInterceptorService } from './security/token-interceptor.service';

HTTP_INTERCEPTORS

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LandingPageComponent,
    FooterComponent,
    ContactUsComponent,
    TakeQuizComponent,
    CoursesComponent,
    SignUpComponent,
    SignInComponent,
    QuestionsComponent
  
  ],
  imports: [



  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService, AuthGuard,
  {provide:HTTP_INTERCEPTORS,
  useClass:TokenInterceptorService,
multi:true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
