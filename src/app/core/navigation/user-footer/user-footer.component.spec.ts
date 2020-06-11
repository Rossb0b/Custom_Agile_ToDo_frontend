import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFooterComponent } from './user-footer.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('UserFooterComponent', () => {
  let component: UserFooterComponent;
  let fixture: ComponentFixture<UserFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserFooterComponent],
      imports: [
        FormsModule,
        TranslateModule.forRoot(),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFooterComponent);
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
