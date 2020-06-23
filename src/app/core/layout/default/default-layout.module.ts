import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutRoutingModule } from './default-layout-routing.module';
import { DefaultLayoutComponent } from './default-layout.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { UserHeaderComponent } from '../../navigation/user-header/user-header.component';
import { UserFooterComponent } from '../../navigation/user-footer/user-footer.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { UserAsideComponent } from '../../navigation/user-aside/user-aside.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverviewComponent } from 'src/app/feature/overview/overview.component';
import { CreateOrganizationDialogComponent } from 'src/app/shared/component/_dialog/create-organization-dialog/create-organization-dialog.component';
import { BoardComponent } from 'src/app/feature/board/board.component';
import { CreateListComponent } from 'src/app/shared/component/_dialog/create-list/create-list.component';
import { CreateCardComponent } from 'src/app/shared/component/_dialog/create-card/create-card.component';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserAsideComponent,
    OverviewComponent,
    CreateOrganizationDialogComponent,
    BoardComponent,
    CreateListComponent,
    CreateCardComponent,
  ],
  imports: [
    CommonModule,
    DefaultLayoutRoutingModule,
    AngularMaterialModule,
    DeviceDetectorModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    CreateOrganizationDialogComponent,
    CreateListComponent,
    CreateCardComponent,
  ],
})
export class DefaultLayoutModule { }
