import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor(
		private translateService: TranslateService
	) { }

	ngOnInit() {
    // Configure the TranslateService
    this.translateService.addLangs(['en', 'fr']);
    const lang = localStorage.getItem('preferredLang') || navigator.language.split('-')[0]; // .split('-')[0] transform fr-FR into fr
		this.translateService.use(lang);
	}
}
