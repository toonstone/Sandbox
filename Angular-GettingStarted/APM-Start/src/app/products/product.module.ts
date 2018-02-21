import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';

// feature module
@NgModule({
  imports: [
    HttpClientModule,
    // if routes in app.module.ts then need to use RouterModule.forRoot([...
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', 
        canActivate: [ ProductGuardService ], // added guard as to whether navigation can occur here if id > 0 and !NaN
        component: ProductDetailComponent}      
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,        
    ProductDetailComponent,
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
