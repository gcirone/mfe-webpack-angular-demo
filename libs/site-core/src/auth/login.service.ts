import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private _loginState = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    console.log('LoginService.constructor');
    // this.http.get<any>(url).pipe(shareReplay(1))
  }

  get isLoggedIn() {
    return this._loginState.getValue();
  }

  loginStateChanges() {
    return this._loginState.asObservable();
  }

  private setLoginState(state: boolean) {
    this._loginState.next(state);
  }
}
