import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog } from '@angular/material';
import { CreateOrganizationDialogComponent } from 'src/app/shared/component/_dialog/create-organization-dialog/create-organization-dialog.component';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewComponent],
      imports: [
        AngularMaterialModule,
        TranslateModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add organization', () => {
    const dialog = TestBed.get(MatDialog);
    spyOn(dialog, 'open').and.callFake(() => Promise.resolve());
    component.addOrganization();
    expect(dialog.open).toHaveBeenCalledWith(CreateOrganizationDialogComponent, {
      panelClass: 'todos',
    });
  });
});
