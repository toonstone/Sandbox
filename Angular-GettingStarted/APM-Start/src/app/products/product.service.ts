import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap, find, elementAt, map, filter, switchMap, first, mergeAll, mergeMap} from 'rxjs/operators';
import { ReturnStatement } from '@angular/compiler';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';

// have these functions declared in separate file?
const stringifyProducts = tap(productData => console.log('Products: ' + JSON.stringify(productData)));

@Injectable()
export class ProductService {
        
    constructor(private http: HttpClient) {
    }

    // private _productUrl = 'www.myWebService.com/api/products';
    private productUrl = './api/products/products.json';
    
    // getProducts(): Observable<IProduct[]> {
    //     return this.http
    //         .get<IProduct[]>(this.productUrl)
    //         .do(productData => console.log('Products: ' + JSON.stringify(productData)))
    //         .catch(this.handleError);    
    // }

    // new rxjs 5.5 way with pipes
    getProducts(): Observable<IProduct[]> {
        return this.http
            .get<IProduct[]>(this.productUrl).pipe(
                stringifyProducts,
                catchError(this.handleError)
            );
    }

    getProduct(id: number): any {
        
        return this.getProducts().pipe(                 
             mergeMap(products => (<IProduct[]>products)),                      
             first(product => (<IProduct>product).productId === id),
             tap(data => {console.log('tapping...'); console.log(data); })            
        );
    }

    handleError = (err: HttpErrorResponse) => {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
