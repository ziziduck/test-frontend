import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import en from '@angular/common/locales/en';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module'

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { MainComponent } from './main/main.component';
import { CalculatorComponent } from './program/calculator/calculator.component';
import { HomeComponent } from './program/home/home.component';
import { Page404Component } from './program/page404/page404.component';
import { LoginComponent } from './program/login/login.component';
import { RegisterComponent } from './program/register/register.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    MainComponent,
    Page404Component,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NzButtonModule,
    NzLayoutModule,
    NzTabsModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzDividerModule,
    NzSwitchModule,
    NzInputModule,
    NzIconModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
