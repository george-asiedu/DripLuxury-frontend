import { Injectable } from '@angular/core';
import { Products } from '../../model/products';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  protected baseUrl = 'http://localhost:3000/api/products'

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Products[]> {
    return this.http.get<{ data: Products[]}>(`${this.baseUrl}/getProducts`).pipe(
      map(response => response.data)
    )
  }

  getMenProducts(limit: number): Observable<Products[]> {
    return this.http.get<{ data: Products[] }>(`${this.baseUrl}/getProducts`).pipe(
      map(response => response.data.filter( product => 
        product.category.toLowerCase() === 'men').slice(0, limit)
      )
    )
  }

  getWomenProducts(limit: number): Observable<Products[]> {
    return this.http.get<{ data: Products[] }>(`${this.baseUrl}/getProducts`).pipe(
      map(response => response.data.filter( product => 
        product.type !== 'new in' && product.category.includes('women')).slice(0, limit)
      )
    )
  }

  getKidsProducts(limit: number): Observable<Products[]> {
    return this.http.get<{ data: Products[] }>(`${this.baseUrl}/getProducts`).pipe(
      map(response => response.data.filter( product => 
        product.type !== 'new in' && product.category.includes('kids')).slice(0, limit)
      )
    )
  }
}
