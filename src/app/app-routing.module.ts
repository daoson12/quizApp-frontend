import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';
import { TakeQuizComponent } from './component/take-quiz/take-quiz.component';
import { SignInComponent } from './security/sign-in/sign-in.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { QuestionsComponent } from './component/questions/questions.component';
import { AuthGuard } from './security/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'contact-us', component:ContactUsComponent},
  {path:'take-quiz', component: TakeQuizComponent, canActivate:[AuthGuard]},
  {path:'sign-in', component:SignInComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'question', component:QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],






exports: [RouterModule]
})
export class AppRoutingModule { }
