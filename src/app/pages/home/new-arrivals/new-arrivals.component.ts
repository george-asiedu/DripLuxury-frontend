import { Component, OnInit } from '@angular/core';
import { Products } from '../../../model/products';
import { ProductsServiceService } from '../../../service/products/products-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.scss'
})
export class NewArrivalsComponent implements OnInit {
  products: Products[] = []

  constructor(private productService: ProductsServiceService, private router: Router) {}

  ngOnInit(): void {
      // this.productService.getAllProducts().subscribe({
      //   next: (response) => {
      //     console.log(response)
      //     this.products = response
      //   },
      //   error: (err) => {
      //     console.error('Error fetching products', err)
      //   }
      // })
  }
}