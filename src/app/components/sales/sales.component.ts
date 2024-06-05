import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { Products } from '../../model/products';
import { ProductsServiceService } from '../../service/products/products-service.service';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [ NgFor, ProductCardComponent, SpinnerComponent ],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent implements OnInit {
  isLoading: boolean = true
  error: string = ''
  products: Products[] = []

  constructor(private ps: ProductsServiceService) {}

  ngOnInit(): void {
      this.ps.getAllProducts().subscribe({
        next: (res: Products[]) => {
          this.products = res.filter(product => product.category.toLowerCase() === 'men')
          this.isLoading = false
        },
        error: (err:string) => {
          this.error = err
          this.isLoading = false
        }
      })
  }
}