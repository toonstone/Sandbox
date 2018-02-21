import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  // selector: 'pm-product-detail', // dont need this as using routing 
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {     
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `${id}`;
    this.productService
      .getProduct(id)      
      .subscribe(productValue => this.product = productValue);
  }

  // ordinarily would just use routerLink on the button not this but is just 
  // for illustrative purposes
  onBack = () => {
    this.router.navigate(['/products']);
  }
}
