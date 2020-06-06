import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../../shared/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})


export class SignupComponent implements OnInit {

  /** define if front is communicating with api */
  isLoading = true;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 300);
  }

  onSignup(form: NgForm) {

    if (form.invalid) {
      return;
    }

    this.isLoading = true;
    this.authService.createUser(form.value.email, form.value.password, form.value.firstname, form.value.lastname);
  }

}
