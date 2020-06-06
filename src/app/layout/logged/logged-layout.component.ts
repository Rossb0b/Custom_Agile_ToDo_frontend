import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logged',
  templateUrl: './logged-layout.component.html',
  styleUrls: ['./logged-layout.component.sass'],
})
export class LoggedLayoutComponent implements OnInit {

  /** define if front is communicating with api */
  isLoading = false;


  constructor() {}

  ngOnInit() {
  }

}
