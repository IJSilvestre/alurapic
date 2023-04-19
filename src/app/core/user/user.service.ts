import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Subject } from 'rxjs';
import { IUser } from './IUser';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new Subject<IUser>();
  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
  }

  getUser() {}

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    if (token) {
      const user = jwt_decode(token) as IUser;
      this.userSubject.next(user);
    }
  }
}
