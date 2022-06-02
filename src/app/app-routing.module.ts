import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { MainComponent } from './main/main.component'
import { CalculatorComponent } from './program/calculator/calculator.component';
import { Page404Component } from './program/page404/page404.component';
import { HomeComponent } from './program/home/home.component';


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
        path:'404', component: Page404Component
      },
      {
        path: '**', component: Page404Component 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }