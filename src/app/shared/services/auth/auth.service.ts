import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiService } from '../Api/api.service';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from 'src/app/pages/login/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'token';

  isLoggedIn$ = this._isLoggedIn$.asObservable();

  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  constructor(private apiService: ApiService, private router: Router) {
    this._isLoggedIn$.next(!!this.token);
  }

  public login(user: User) {
    return this.apiService
      .login(user)
      .pipe(
        tap(((user: any) => {
          this._isLoggedIn$.next(true);
          localStorage.setItem(this.TOKEN_NAME, user.access_token);
          localStorage.setItem('avatar', user.logo.url.low.url);
        }))
      );
  }

  public logout() {
    this._isLoggedIn$.next(false);
    localStorage.clear();
    this.router.navigate(['login']);

  }

  getRoute() {
    return this.router.url;

  }

}
