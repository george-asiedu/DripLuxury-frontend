import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../../model/products';
import { ProductsServiceService } from '../../service/products/products-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  @Input() productItems!: Products
  isLoading: boolean = false
  error: string = ''

  constructor(private ps: ProductsServiceService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe(
        (param) => {
          let id: string | null = param.get('id')
          if(id !== null) this.productDetails(id)
        }
      )
  }

  productDetails(id: string) {
    this.isLoading = true
    this.ps.getAllProducts().subscribe({
      next: (response) => {
        const product = response.find(res => res.id === id)
        if(product) {
          this.productItems = product
        } else {
          this.error = 'Whoops... 😒 No products found.'
        }
        this.isLoading = false
      },
      error: (err) => {
        this.error = err
        this.isLoading = false
      }
    })
  }
}