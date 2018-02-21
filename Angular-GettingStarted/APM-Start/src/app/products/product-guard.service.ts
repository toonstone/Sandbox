import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {
  
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = +route.url[1].path; // get the id value in the url
        
    const  isValid = Number.isInteger(id) && id > 0;

    if (isValid) {
      return true;
    }

    alert('invalid Product id'); // route to an error page ? 
    this.router.navigate(['/products']); // send user back to the product list page
    return false; // abort navigation
  }  
}
