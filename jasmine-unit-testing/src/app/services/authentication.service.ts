import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() { 
    this._isAuthenticated = false;
  }

  private _authenticationCode: string;
  private _isAuthenticated: boolean;

  get isAuthenticated(): boolean {
    return !!this._authenticationCode;
  }

  setAuthenticationCode(code: string): void {

    if (!code) {
      console.error('Invalid authentication code');
    }

    this._authenticationCode = code;
    
  }

}
