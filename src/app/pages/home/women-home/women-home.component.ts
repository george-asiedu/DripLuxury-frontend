import { Component } from '@angular/core';
import { Products } from '../../../model/products';
import { ProductsServiceService } from '../../../service/products/products-service.service';
import { NgFor } from '@angular/common';
import { ProductCardComponent } from '../../../components/product-card/product-card.component';

@Component({
  selector: 'app-women-home',
  standalone: true,
  imports: [NgFor, ProductCardComponent],
  templateUrl: './women-home.component.html',
  styleUrl: './women-home.component.scss'
})
export class WomenHomeComponent {
  products: Products[] = []

  constructor(private productService: ProductsServiceService) {}

  ngOnInit(): void {
      this.productService.getAllProducts().subscribe({
        next: (response: Products[]) => {
          this.products = response.filter(product => product.category.includes('women'))
        },
        error: (err: any) => {
          console.error('Error fetching products', err)
        }
      })
  }
}