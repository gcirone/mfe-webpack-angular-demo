import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'site-root',
  template: `
    <header>
      <nav>
        <a [routerLink]="['/']" [routerLinkActive]="['active']" [routerLinkActiveOptions]="{ exact: true }">Home</a>
        <a [routerLink]="['/team-one']" [routerLinkActive]="['active']">Team One</a>
        <a [style.flex-grow]="1" [routerLink]="['/team-two']" [routerLinkActive]="['active']">Team Two</a>
        <a [routerLink]="['/login']" [routerLinkActive]="['active']">Login</a>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    header { background: lightgray }
    header nav { display: flex }
    header nav a { padding: 8px 16px }
  `],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'launcher';
}
