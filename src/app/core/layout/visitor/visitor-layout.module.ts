import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorLayoutRoutingModule } from './visitor-layout-routing.module';
import { VisitorLayoutComponent } from './visitor-layout.component';
import { RegisterComponent } from '../../page/register/register.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { LoginComponent } from '../../page/login/login.component';
import { VisitorHeaderComponent } from '../../navigation/visitor-header/visitor-header.component';


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
  ]
})
export class VisitorLayoutModule { }
