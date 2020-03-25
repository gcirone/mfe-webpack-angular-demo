import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'site-core';

@Component({
  selector: 'team-three-payment',
  template: `
    <main>
      <p>Team three payment!</p>
      <p>
        <small>Go back to <a [routerLink]="['/team-one']">team one</a></small>
      </p>
      <p *ngIf="loginService.loginStateChanges() | async">
        <small>isLoggedIn: {{ loginService.isLoggedIn }}</small>
      </p>
    </main>
  `
})
export class PaymentComponent implements OnInit, OnDestroy {
  @Input() methods: string[];

  constructor(public loginService: LoginService) {}

  ngOnInit() {
    console.log('methods', this.methods, this.loginService.isLoggedIn)
  }

  ngOnDestroy(){
    console.log('destroy')
  }

}
