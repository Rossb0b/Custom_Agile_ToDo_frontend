import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatDialogModule,
  MatProgressBarModule,
  MatSliderModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatChipsModule,
  MatGridListModule,
  MatCheckboxModule,
  MatTabsModule,
  MatDividerModule,
  MatListModule,
  MatBadgeModule,
  MatIconModule,
  MatMenuModule,
} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function createHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  imports: [
    TranslateModule,
  ],
  exports : [
    MatAutocompleteModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatChipsModule,
    MatGridListModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatBadgeModule,
    MatIconModule,
    TranslateModule,
    MatMenuModule,
  ],
})
export class AngularMaterialModule {

}
