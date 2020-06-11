import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorFooterComponent } from './visitor-footer.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('VisitorFooterComponent', () => {
  let component: VisitorFooterComponent;
  let fixture: ComponentFixture<VisitorFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorFooterComponent],
      imports: [
        AngularMaterialModule,
        FormsModule,
        TranslateModule.forRoot(),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle language change', () => {
    component.lang = 'fr';
    const translateService = TestBed.get(TranslateService);
    spyOn(localStorage, 'setItem');
    spyOn(translateService, 'use');
    component.onLanguageChange();
    expect(translateService.use).toHaveBeenCalledWith('fr');
    expect(localStorage.setItem).toHaveBeenCalledWith('preferredLang', 'fr');
  });
});
