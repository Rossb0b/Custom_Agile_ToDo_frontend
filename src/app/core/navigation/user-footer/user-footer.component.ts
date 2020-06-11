import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-footer',
  templateUrl: './user-footer.component.html',
  styleUrls: ['./user-footer.component.sass']
})
export class UserFooterComponent implements OnInit {
  lang: 'fr' | 'en';

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.lang = this.translateService.getDefaultLang() as 'fr' | 'en';
  }

  onLanguageChange() {
    this.translateService.use(this.lang);
    localStorage.setItem('preferredLang', this.lang);
  }
}
