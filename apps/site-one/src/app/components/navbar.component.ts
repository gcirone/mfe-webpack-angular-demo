import { Component } from '@angular/core';

@Component({
  selector: 'site-navbar',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand text-primary" [routerLink]="['/']">S1</a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" [routerLink]="['/']" [routerLinkActive]="['active']" [routerLinkActiveOptions]="{ exact: true }">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [routerLink]="['/team-one']" [routerLinkActive]="['active']">Team One</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [routerLink]="['/team-two']" [routerLinkActive]="['active']">Team Two</a>
          </li>
        </ul>

        <site-core-login></site-core-login>
      </div>
    </nav>
  `
})
export class NavbarComponent {}
