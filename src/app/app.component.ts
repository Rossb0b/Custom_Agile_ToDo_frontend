import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './shared/service/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor(
    private translateService: TranslateService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    // Configure the TranslateService
    this.translateService.addLangs(['en', 'fr']);
    const lang = localStorage.getItem('preferredLang') || navigator.language.split('-')[0];
    this.translateService.use(lang);
    this.connectUser();
    if (!this.userService.getCurrentUserValue()) {
      this.userService.connectUser();
    }
  }

  async connectUser(): Promise<void> {
    try {
      await this.userService.connectUser();
    } catch (error) {
      this.router.navigateByUrl('/');
      return;
    }
  }
}
