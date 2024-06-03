import { Component } from '@angular/core';
import { Products } from '../../../model/products';
import { ProductsServiceService } from '../../../service/products/products-service.service';
import { ProductCardComponent } from '../../../components/product-card/product-card.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [ProductCardComponent, NgForOf],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.scss'
})
export class NewArrivalsComponent {
  products: Products[] = []

  constructor(private productService: ProductsServiceService) {}

  ngOnInit(): void {
      this.productService.getAllProducts().subscribe({
        next: (response: Products[]) => {
          this.products = response.filter(product => product.type.includes('new in'))
        },
        error: (err) => {
          console.error('Error fetching products', err)
        }
      })
  }
}