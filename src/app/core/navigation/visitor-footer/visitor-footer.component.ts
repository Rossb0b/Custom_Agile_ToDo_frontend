import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-visitor-footer',
  templateUrl: './visitor-footer.component.html',
  styleUrls: ['./visitor-footer.component.sass'],
})
export class VisitorFooterComponent implements OnInit {
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
