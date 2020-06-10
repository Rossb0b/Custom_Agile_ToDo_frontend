import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { BrowserXhr } from '@angular/http';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './shared/angular-material.module';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';

import { AuthInterceptor } from './shared/helper/auth-interceptor';
import { ErrorInterceptor } from './shared/helper/error-interceptor';

import { AppComponent } from './app.component';

import { ErrorComponent } from './shared/component/error/error.component';
import { HomeHeaderComponent } from './core/navigation/home/home-header.component';
import { RegisterComponent } from './core/page/register/register.component';
import { VisitorHeaderComponent } from './core/navigation/visitor-header/visitor-header.component';
import { VisitorHomeComponent } from './core/page/visitor-home/visitor-home.component';

// import {CustExtBrowserXhr} from './cust-ext-browser-xhr';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeHeaderComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
