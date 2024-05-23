import { Injectable } from '@angular/core';
import { Products } from '../../model/products';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  protected baseUrl = 'http://localhost:3000/api/products'

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Products[]> {
    return this.http.get<{ data: Products[]}>(`${this.baseUrl}/allProducts`).pipe(
      map(response => response.data)
    )
  }
}
