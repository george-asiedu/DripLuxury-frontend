import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../../../components/product-card/product-card.component';
import { Products } from '../../../model/products';
import { ProductsServiceService } from '../../../service/products/products-service.service';

@Component({
  selector: 'app-kids',
  standalone: true,
  imports: [NgFor, ProductCardComponent],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.scss'
})
export class KidsComponent {
  products: Products[] = []

  constructor(private productService: ProductsServiceService) {}

  ngOnInit(): void {
      this.productService.getAllProducts().subscribe({
        next: (response: Products[]) => {
          this.products = response.filter(product => product.category.includes('kids'))
        },
        error: (err: any) => {
          console.error('Error fetching products', err)
        }
      })
  }
}