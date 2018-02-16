import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    styleUrls: ['./product-list.component.css'],
    templateUrl: './products-list.component.html'
})
export class ProductListComponent
    implements OnInit {

    constructor() {
        this._listFilter = 'cart';
        this.listFilter = this._listFilter;
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

    products: IProduct[] = [
        {
            'productId': 1,
            'productName': 'Leaf Rake',
            'productCode': 'GDN-0011',
            'releaseDate': 'March 19, 2016',
            'description': 'Leaf rake with 48-inch wooden handle.',
            'price': 19.95,
            'starRating': 3.2,
            'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
        },
        {
            'productId': 2,
            'productName': 'Garden Cart',
            'productCode': 'GDN-0023',
            'releaseDate': 'March 18, 2016',
            'description': '15 gallon capacity rolling garden cart',
            'price': 32.99,
            'starRating': 4.2,
            'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
        },
        {
            'productId': 5,
            'productName': 'Hammer',
            'productCode': 'TBX-0048',
            'releaseDate': 'May 21, 2016',
            'description': 'Curved claw steel hammer',
            'price': 8.9,
            'starRating': 4.8,
            'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
        },
        {
            'productId': 8,
            'productName': 'Saw',
            'productCode': 'TBX-0022',
            'releaseDate': 'May 15, 2016',
            'description': '15-inch steel blade hand saw',
            'price': 11.55,
            'starRating': 3.7,
            'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'
        }
    ];

    showImage: boolean;

    // You have to overload the ngOnInit function. This doesn't work with arrow functions.
    // While a normal function declaration creates the ngOnInit property on the prototype, an arrow function creates it on the instance.
    // Angular itself looks only for the hooks on the prototype. which is why your original approach doesn't work as expected.
    ngOnInit() {
        console.log('called ngOnInit');
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
