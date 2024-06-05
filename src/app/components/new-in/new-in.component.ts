import {Component, OnInit} from '@angular/core';
import {ProductCardComponent} from "../product-card/product-card.component";
import {NgFor} from "@angular/common";
import {Products} from "../../model/products";
import {ProductsServiceService} from "../../service/products/products-service.service";
import {RouterLink, RouterModule} from "@angular/router";
import {SpinnerComponent} from "../spinner/spinner.component";

@Component({
  selector: 'app-new-in',
  standalone: true,
  imports: [ProductCardComponent, NgFor, RouterModule, SpinnerComponent],
  templateUrl: './new-in.component.html',
  styleUrl: './new-in.component.scss'
})
export class NewInComponent implements OnInit {
  error: string = ''
  isLoading: boolean = true
  products: Products[] = []

  constructor(private ps: ProductsServiceService) {}

  ngOnInit() {
    this.ps.getAllProducts().subscribe({
      next: (response: Products[]) => {
        this.products = response.filter(product => product.category.toLowerCase() === 'men' && product.type === 'new in')
        this.isLoading = false
      },
      error: (err: string) => {
        this.error = err
        this.isLoading = false
      }
    })
  }
}
