import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ICustomer } from '../models/customer';
import { _throw} from 'rxjs/observable/throw';

const stringifyData = tap(data => console.log(`Data: ${JSON.stringify(data)}`));

@Injectable()
export class CustomerService {
  
  constructor(private http: HttpClient) { }

  private customerApiUrl = './api/customers/customers.json';

  getCustomers(): Observable<ICustomer[]> {
    return this.http
      .get(this.customerApiUrl).pipe(
          stringifyData,

      )
  }

}
