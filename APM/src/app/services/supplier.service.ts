// services
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  suppliersUrl = 'api/suppliers';

  constructor(private http: HttpClient) {}

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
