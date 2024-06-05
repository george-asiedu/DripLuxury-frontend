import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../../model/products';
import { ProductsServiceService } from '../../service/products/products-service.service';
import { RouterModule } from '@angular/router';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgOptimizedImage, RouterModule, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  @Input() productItems!: Products
  isLoading: boolean = false
  error: string = ''
  wishlist: boolean = false

  constructor(private ps: ProductsServiceService) {}

  ngOnInit(): void {
    
  }
}