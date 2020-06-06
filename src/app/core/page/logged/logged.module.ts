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
import { OrganisationViewComponent } from 'src/app/feature/organisation/view/organisation-view.component';
import { OrganisationEditComponent } from 'src/app/feature/organisation/edit/organisation-edit.component';
import { OrganisationCreateComponent } from 'src/app/feature/organisation/create/organisation-create.component';
import { BoardComponent } from './board/board.component';
import { OrganisationComponent } from './organisation/organisation.component';


@NgModule({
  declarations: [
    LoggedLayoutComponent,
    BoardComponent,
    BoardShowComponent,
    BoardEditComponent,
    BoardCreateComponent,
    OrganisationComponent,
    OrganisationViewComponent,
    OrganisationEditComponent,
    OrganisationCreateComponent,
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
