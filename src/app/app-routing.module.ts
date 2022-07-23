import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { MainComponent } from './main/main.component'
import { HomeComponent } from './program/home/home.component';
import { CalculatorComponent } from './program/calculator/calculator.component';
import { LoginComponent } from './program/login/login.component';
import { Page404Component } from './program/page404/page404.component';
import { RegisterComponent } from './program/register/register.component';

const routes: Routes = [

  {
    path:'main', component: MainComponent, children: [
      {
        path:'home', component: HomeComponent
      },
      {
        path:'calculator', component: CalculatorComponent
      },
      {
        path:'login', component: LoginComponent
      },
      {
        path:'register', component: RegisterComponent
      },
      {
        path:'404', component: Page404Component
      },
      {
        path: '**', component: Page404Component 
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }