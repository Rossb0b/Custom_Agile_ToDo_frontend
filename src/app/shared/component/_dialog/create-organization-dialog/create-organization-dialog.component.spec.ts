import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrganizationDialogComponent } from './create-organization-dialog.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrganizationService } from 'src/app/shared/service/organization/organization.service';
import { Router } from '@angular/router';

describe('CreateOrganizationDialogComponent', () => {
  let component: CreateOrganizationDialogComponent;
  let fixture: ComponentFixture<CreateOrganizationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOrganizationDialogComponent],
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
    fixture = TestBed.createComponent(CreateOrganizationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create organization', async () => {
    component.form.setValue({ name: 'fake' });
    const router = TestBed.get(Router);
    const organizationService = TestBed.get(OrganizationService);
    spyOn(organizationService, 'create').and.callFake(() => Promise.resolve({ organizationId: 1 }));
    spyOn(router, 'navigateByUrl').and.callFake(() => Promise.resolve({ id: 1 }));
    await component.createOrganization();
    expect(organizationService.create).toHaveBeenCalledWith('fake');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/organization/1');
  });

  it('create organization should throw', async (done) => {
    component.form.setValue({ name: 'fake' });
    const organizationService = TestBed.get(OrganizationService);
    spyOn(organizationService, 'create').and.callFake(() => Promise.reject('fake error'));

    try {
      await component.createOrganization();
    } catch (error) {
      expect(error).toEqual(Error('fake error'));
      done();
    }
  });

  it('should return if invalid form', () => {
    const organizationService = TestBed.get(OrganizationService);
    spyOn(organizationService, 'create');
    component.createOrganization();
    expect(organizationService.create).not.toHaveBeenCalled();
  });
});
