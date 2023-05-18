import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `<app-navbar-inmuebles></app-navbar-inmuebles> <router-outlet></router-outlet>`,
})
export class LayoutComponent {}
