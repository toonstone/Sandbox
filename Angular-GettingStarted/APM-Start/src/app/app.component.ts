import { Component } from '@angular/core';

@Component({
  styles: ['./app.component.css'],
  selector: 'pm-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  pageTitle: string = 'My Product Management';
}
