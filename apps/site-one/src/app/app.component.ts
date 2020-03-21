import { Component } from '@angular/core';

@Component({
  selector: 'site-root',
  template: `
    <site-navbar></site-navbar>
    <main class="container-fluid">s
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {}
