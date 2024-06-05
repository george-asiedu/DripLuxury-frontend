import { Component } from '@angular/core';
import { Products } from '../../../model/products';
import { ProductsServiceService } from '../../../service/products/products-service.service';
import { NgFor } from '@angular/common';
import { ProductCardComponent } from '../../../components/product-card/product-card.component';

@Component({
  selector: 'app-men-home',
  standalone: true,
  imports: [NgFor, ProductCardComponent],
  templateUrl: './men-home.component.html',
  styleUrl: './men-home.component.scss'
})
export class MenHomeComponent {
  products: Products[] = []

  constructor(private productService: ProductsServiceService) {}

  ngOnInit(): void {
      this.productService.getMenProducts(8).subscribe({
        next: (response: Products[]) => {
          this.products = response.filter(product => product.type !== 'new in' && product.category.includes('men'))
        },
        error: (err: any) => {
          console.error('Error fetching products', err)
        }
      })
  }
}