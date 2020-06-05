import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService } from '../../../shared/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})


export class LoginComponent implements OnInit {

  /** define if front is communicating with api */
  isLoading = true;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isLoading = true;

    if (this.authService.getIsAuth()) {
      this.router.navigate(['']);
    } else {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }
  }


  onLogin(form: NgForm) {
    this.isLoading = true;

    if (form.invalid) {
      return;
    }

    this.authService.login(form.value.email, form.value.password);
    this.isLoading = false;
  }
}
