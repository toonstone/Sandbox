import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authenticationService: AuthenticationService) {}

  ngOnInit() {
  }
  
  get isAuthenticated(): boolean {
    return !this._authenticationService.isAuthenticated;
  }

  login(): void {    
    // check ok to login etc should be in own service really! etc!
    this._authenticationService.setAuthenticationCode('1234ABCD');
  }
}
