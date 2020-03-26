import { Component, OnInit } from '@angular/core';
import { LazyLoaderConfig } from 'site-core';

@Component({
  selector: 'site-home',
  template: `
    <p>Welcome to site one!</p>
    <p>
      <button class="btn btn-success btn-sm" (click)="showComponent = !showComponent">lazy load team-three component</button>
      <lazy-loader *ngIf="showComponent" [config]="lazyLoaderConfig"></lazy-loader>
    </p>
  `
})
export class HomeComponent implements OnInit {
  showComponent = false;

  lazyLoaderConfig: LazyLoaderConfig = {
    moduleType: () => import(('teamthree/payment.module')).then(({ PaymentModule }) => PaymentModule)
  };

  ngOnInit() {
    // console.log('HomeComponent')
  }
}
