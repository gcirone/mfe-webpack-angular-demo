import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private loginState = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    // this.http.get<any>(url).pipe(shareReplay(1))
  }

  get isLoggedIn() {
    return this.loginState.getValue();
  }

  loginStateChanges() {
    return this.loginState.asObservable();
  }

  setLoginState(state: boolean) {
    this.loginState.next(state);
  }
}
