import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../services/authentication.service';

class MockAuthenticationService {

  authenticated = false;

  get isAuthenticated(): boolean {
    return this.authenticated;
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthenticationService: MockAuthenticationService;
  let authenticationService: AuthenticationService;

  beforeEach(async(() => {
    
    mockAuthenticationService = new MockAuthenticationService();

    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      
      // use of a mock authentication service
      providers: [ { provide: AuthenticationService, useValue: mockAuthenticationService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);    
    component = fixture.componentInstance;
    // fixture.debugElement.injector.get(AuthenticationService); // apparently this always works!
    // this actually gets a clone of type MockAuthenticationService
    // authenticationService = TestBed.get(AuthenticationService);
  
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isAuthenticated_Should return false when user is not authenticated', () => {
    
    // Arrange
    
    // Act
    const returnValue = component.isAuthenticated;

    // Assert
    expect(returnValue).toBeFalsy();
  });

  it('isAuthenticated_Should return true when user is authenticated', () => {
    
    // Arrange
    //authenticationService.setAuthenticationCode('CODE');

    // Act
    const returnValue = component.isAuthenticated;

    // Assert
    expect(returnValue).toBeTruthy();
  });

  afterEach(() => {    
    //mockAuthenticationService = null;
   // component = null;
    //fixture.destroy();
  });
});
