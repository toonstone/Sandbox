import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './login/login.component';
import { StylingModule } from './/styling.module';

@NgModule({
  declarations: [
    AppComponent,
    ConvertToSpacePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    StylingModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
