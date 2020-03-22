import { Component } from '@angular/core';
import { LoginService } from 'site-core';

@Component({
  selector: 'team-one-root',
  template: `
    <main>
      <p>Team one section!</p>
      <p>
        <small>Go back to <a [routerLink]="['/']">home</a></small>
      </p>
      <p *ngIf="loginService.loginStateChanges() | async">
        <small>isLoggedIn: {{ loginService.isLoggedIn }}</small>
      </p>
    </main>
  `
})
export class TeamOneComponent {
  constructor(public loginService: LoginService) {}
}
