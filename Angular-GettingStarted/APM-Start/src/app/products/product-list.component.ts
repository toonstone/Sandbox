import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    styleUrls: ['./product-list.component.css'],
    templateUrl: './products-list.component.html'
})
export class ProductListComponent
    implements OnInit {

    constructor(private productService: ProductService) {        
    }

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;

    // mock last know search string
    private _listFilter: string;

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];

    products: IProduct[] = [];
        
    showImage: boolean;

    // You have to overload the ngOnInit function. This doesn't work with arrow functions.
    // While a normal function declaration creates the ngOnInit property on the prototype, an arrow function creates it on the instance.
    // Angular itself looks only for the hooks on the prototype. which is why your original approach doesn't work as expected.
    ngOnInit() {
        console.log('called ngOnInit');

        this.products = this.productService.getProducts();
        this._listFilter = 'cart';
        this.listFilter = this._listFilter;
    }

    toggleImage = () => {
        this.showImage = !this.showImage;
    }

    performFilter = (filterBy: string): IProduct[] => {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}
