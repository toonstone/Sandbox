import { TestBed, inject } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';

// test spec
describe('AuthenticationService', () => {

  // This will run before each unit test
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService]
    });

    spyOn(console, 'error');
  });

  // individual unit test
  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it('isAuthenticated_Should return true when there is an authentication code', 
      inject([AuthenticationService], 
      (service: AuthenticationService) => {

    // Arrange:
    service.setAuthenticationCode('code');

    // Act:
    const returnValue = service.isAuthenticated;
    
    // Assert:
    expect(returnValue).toBeTruthy();
  }));

  // individual unit test
  it('isAuthenticated_Should return false when there is no authentication code', 
      inject([AuthenticationService], 
      (service: AuthenticationService) => {

    // Arrange:
    
    // Act:
    const returnValue = service.isAuthenticated;
    
    // Assert:
    expect(returnValue).toBeFalsy();
  }));

  // individual unit test
  it('setAuthentication_Should log error if authenticaton code is empty',
      inject([AuthenticationService], 
      (service: AuthenticationService) => {

    // Arrange:
    const authenticationCode = '';

    // Act:
    service.setAuthenticationCode(authenticationCode);
    
    // Assert:
    expect(console.error).toHaveBeenCalledTimes(1);

  }));
});
