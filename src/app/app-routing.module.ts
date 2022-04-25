import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { MainComponent } from './main/main.component'
import { CalculatorComponent } from './calculator/calculator.component';


const routes: Routes = [
  {path:'main', component:MainComponent},
  {path:'calculator', component:CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }