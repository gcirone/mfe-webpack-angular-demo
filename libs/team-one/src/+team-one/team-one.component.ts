import { Component } from '@angular/core';
import { LoginService } from 'site-core';

@Component({
  selector: 'team-one-root',
  template: `
    <main>
      <p>Team one section!</p>
      <p>Go back to <a [routerLink]="['/']">home</a></p>
    </main>
  `
})
export class TeamOneComponent {
  constructor(private loginService: LoginService) {
    console.log('loginService', this.loginService.isLoggedIn)
  }
}
