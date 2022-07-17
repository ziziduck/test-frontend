import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import en from '@angular/common/locales/en';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculatorComponent } from './program/calculator/calculator.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module'
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { Page404Component } from './program/page404/page404.component';
import { HomeComponent } from './program/home/home.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LoginComponent } from './program/login/login.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    MainComponent,
    Page404Component,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
