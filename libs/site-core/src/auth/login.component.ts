import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'site-core-login',
  template: `
    <div class="dropdown">
      <button class="dropdown-toggle btn btn-sm btn-outline-info" role="button" (click)="toggleDropdownMenu()">{{ buttonLabel }}</button>
      <div class="dropdown-menu dropdown-menu-sm-right px-4 py-3" [style.display]="dropdownMenuDisplay">
        <div class="form-inline" *ngIf="!(loginService.loginStateChanges() | async); else leggedInContent">
          <div class="input-group input-group-sm  mb-2 mr-sm-2">
            <div class="input-group-prepend"><div class="input-group-text">@</div></div>
            <input type="text" class="form-control" placeholder="username" size="5" />
          </div>
          <button class="btn btn-primary btn-sm" (click)="toggleLoginState()">Sign in</button>
        </div>
        <ng-template #leggedInContent>
          <button class="btn btn-secondary btn-sm" (click)="toggleLoginState()">Log out</button>
        </ng-template>
      </div>
    </div>
  `
})
export class LoginComponent {
  dropdownMenuDisplay = 'none';

  constructor(public loginService: LoginService) {}

  get buttonLabel() {
    return this.loginService.isLoggedIn ? '@user' : 'Login';
  }

  toggleDropdownMenu() {
    this.dropdownMenuDisplay = this.dropdownMenuDisplay === 'block' ? 'none' : 'block';
  }

  toggleLoginState() {
    this.loginService.setLoginState(!this.loginService.isLoggedIn);
  }
}
