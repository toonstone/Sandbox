import { Component } from '@angular/core';
// import { ProductService } from './products/product.service';
// can import at component or module level

@Component({
  styles: ['./app.component.css'],
  selector: 'pm-root',
  templateUrl: './app.component.html'
 // , providers: [ProductService]
})
export class AppComponent {
  pageTitle: string = 'My Product Management';
}
