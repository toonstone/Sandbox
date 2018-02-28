import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StylingModule } from './styling.module';

  describe('AppComponent', () => {
  
  let testFixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent
      ],
      imports: [       
        StylingModule
      ]      
    }).compileComponents();

    testFixture = TestBed.createComponent(AppComponent);
  }));
  
  it('should create the app', async(() => {
    
    const app = testFixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
  it(`should have as title 'app'`, async(() => {
    
    const app = testFixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  
  it('should render title in a h1 tag', async(() => {
    
    testFixture.detectChanges();
    const compiled = testFixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));

  afterEach(() => {
    testFixture.destroy();
  });
});
