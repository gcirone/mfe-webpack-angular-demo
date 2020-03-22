import { Component } from '@angular/core';
import { LoginService } from 'site-core';

@Component({
  selector: 'team-three-payment',
  template: `
    <main>
      <p>Team three payment!</p>
      <p>
        <small>Go back to <a [routerLink]="['/']">home</a></small>
      </p>
      <p *ngIf="loginService.loginStateChanges() | async">
        <small>isLoggedIn: {{ loginService.isLoggedIn }}</small>
      </p>
    </main>
  `
})
export class PaymentComponent {
  constructor(public loginService: LoginService) {}
}
