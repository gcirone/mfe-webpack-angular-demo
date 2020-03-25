import { Component, OnInit, ViewContainerRef, Type, Injector } from '@angular/core';
import { LazyLoaderService } from 'site-core';

@Component({
  selector: 'site-home',
  template: `
    <p>Welcome to {{ title }}!</p>
    <button class="btn btn-sm" (click)="loadModule()">lazy load team-three module</button>
  `
})
export class HomeComponent implements OnInit {
  title = 'site one';

  constructor(private lazyLoaderService: LazyLoaderService, private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {}

  loadModule() {
    const lazyModuleType = import(('teamthree/payment.module')).then(({ PaymentModule }) => PaymentModule);
    this.lazyLoaderService.bootstrapModule(this.viewContainerRef, lazyModuleType);
  }
}
