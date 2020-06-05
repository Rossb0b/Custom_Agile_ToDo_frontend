import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeHeaderComponent } from 'src/app/core/navigation/home-header.component';
// import { routerTransition } from '../../../shared/animation/router/router.animation';

@Component({
  selector: 'app-default',
  // animations: [routerTransition()],
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.sass'],
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


  @ViewChild(HomeHeaderComponent, null)child: HomeHeaderComponent;
   /** define if front is communicating with api */
   isLoading = false;

   login = false;
   signup = false;

  constructor() {}

  ngOnInit() {
  }

  listenToHomeComponent(data) {
    if (data.index === 0) {
      this.login = false;
      this.signup = data.status;
    }

    if (data.index === 1) {
      this.signup = false;
      this.login = data.status;
    }
  }

}
