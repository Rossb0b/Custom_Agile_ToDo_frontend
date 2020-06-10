import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorLayoutRoutingModule } from './visitor-layout-routing.module';
import { VisitorLayoutComponent } from './visitor-layout.component';
import { RegisterComponent } from '../../page/register/register.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { LoginComponent } from '../../page/login/login.component';
import { VisitorHeaderComponent } from '../../navigation/visitor-header/visitor-header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    VisitorLayoutComponent,
    LoginComponent,
    RegisterComponent,
    VisitorHeaderComponent,
  ],
  imports: [
    CommonModule,
    VisitorLayoutRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class VisitorLayoutModule { }