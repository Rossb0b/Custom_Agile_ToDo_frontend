import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoggedRoutingModule } from './logged-routing.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { BoardShowComponent } from 'src/app/feature/board/show/board-show.component';
import { BoardEditComponent } from 'src/app/feature/board/edit/board-edit.component';
import { BoardCreateComponent } from 'src/app/feature/board/create/board-create.component';
import { LoggedLayoutComponent } from 'src/app/layout/logged/logged-layout.component';
import { OrganizationViewComponent } from 'src/app/feature/organization/view/organization-view.component';
import { OrganizationEditComponent } from 'src/app/feature/organization/edit/organization-edit.component';
import { OrganizationCreateComponent } from 'src/app/feature/organization/create/organization-create.component';
import { BoardComponent } from './board/board.component';
import { OrganizationComponent } from './organization/organization.component';


@NgModule({
  declarations: [
    LoggedLayoutComponent,
    BoardComponent,
    BoardShowComponent,
    BoardEditComponent,
    BoardCreateComponent,
    OrganizationComponent,
    OrganizationViewComponent,
    OrganizationEditComponent,
    OrganizationCreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    LoggedRoutingModule,
    RouterModule
  ]
})
export class LoggedModule { }
