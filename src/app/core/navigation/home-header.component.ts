import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.sass']
})
export class HomeHeaderComponent implements OnInit {

  @Output() emitter: EventEmitter<any> = new EventEmitter();
  signup = {index: 0, status: false};
  login = {index: 1, status: false};

  ngOnInit() {}

  onActiveSignUp() {
    if (this.login.status === true) {
      this.login.status = false;
      this.emitter.emit(this.login);
    }

    if (this.signup.status === true) {
      this.signup.status = false;
    } else {
      this.signup.status = true;
    }

    this.emitter.emit(this.signup);
  }

  onActiveLogin() {
    if (this.signup.status === true) {
      this.signup.status = false;
      this.emitter.emit(this.signup);
    }

    if (this.login.status === true) {
      this.login.status = false;
    } else {
      this.login.status = true;
    }

    this.emitter.emit(this.login);
  }
}
