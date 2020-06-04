import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService } from '../../../shared/service/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  /** define if front is communicating with api */
  isLoading = false;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isLoading = true;

    if (this.authService.getIsAuth()) {
      this.router.navigate(['']);
    }

    this.isLoading = false;
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
