import { Component, ViewContainerRef } from '@angular/core';
import { LazyLoaderService, LoginService } from 'site-core';

@Component({
  selector: 'team-one-root',
  template: `
    <main>
      <p>Team one section!</p>
      <p>
        <small>Go back to <a [routerLink]="['/']">home</a></small>
      </p>
      <p>
        <button class="btn btn-success btn-sm" (click)="loadModule()">lazy load team-three modules</button>
      </p>
      <p *ngIf="loginService.loginStateChanges() | async">
        <small>isLoggedIn: {{ loginService.isLoggedIn }}</small>
      </p>
    </main>
  `
})
export class TeamOneComponent {
  constructor(
    public loginService: LoginService,
    private lazyLoaderService: LazyLoaderService,
    private viewContainerRef: ViewContainerRef
  ) {}

  loadModule() {
    const lazyModuleType = import(('teamthree/payment.module')).then(({ PaymentModule }) => PaymentModule);
    this.lazyLoaderService.bootstrapModule(this.viewContainerRef, lazyModuleType);
  }
}
