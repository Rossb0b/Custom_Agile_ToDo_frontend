import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../../shared/animation/router/router.animation';

@Component({
  selector: 'app-default',
  // animations: [routerTransition()],
  templateUrl: './default-layout.component.html',
  // styleUrls: ['./default-layout.component.css'],
  // host: { '[@routerTransition]': '' }
})
export class DefaultLayoutComponent implements OnInit {

  /**
   *  Return the state of the route;
   *
   * @param {*} outlet
   * @returns {any}
   * @memberof DefaultLayoutComponent
   */
  // getState(outlet: { activatedRouteData: { state: any; }; }) {
  //   return outlet.activatedRouteData.state;
  // }

  constructor() {}

  ngOnInit() {
  }
}
