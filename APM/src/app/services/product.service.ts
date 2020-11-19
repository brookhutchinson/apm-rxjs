// services
import { Injectable }      from '@angular/core';
import { HttpClient }      from '@angular/common/http';
import { SupplierService } from './supplier.service';

// interfaces
import { Product }         from './../interfaces/product';
import { Supplier }        from './../interfaces/supplier';

// rxjs
import { Observable }      from 'rxjs';
import { throwError }      from 'rxjs';
import { catchError }      from 'rxjs/operators';
import { tap }             from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';
  private suppliersUrl = this.supplierService.suppliersUrl;

  constructor(private http: HttpClient, private supplierService: SupplierService) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        tap(data => console.log('Products: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private fakeProduct(): Product {
    return {
      id: 42,
      productName: 'Another One',
      productCode: 'TBX-0042',
      description: 'Our new product',
      price: 8.9,
      categoryId: 3,
      // category: 'Toolbox',
      quantityInStock: 30
    };
  }

  private handleError(err: any): Observable<never> {
    let errorMessage: string;

    if (err.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // server-side error
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }

    // write to console
    console.error(err);

    // throw error
    return throwError(errorMessage);
  }
}
