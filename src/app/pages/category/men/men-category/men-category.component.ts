import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../../../../components/navbar/navbar.component";
import {FooterComponent} from "../../../../components/footer/footer.component";
import {RouterModule} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {NgFor, NgIf} from "@angular/common";
import {SpinnerComponent} from "../../../../components/spinner/spinner.component";
import {ProductCardComponent} from "../../../../components/product-card/product-card.component";
import { Products } from '../../../../model/products';
import { ProductsServiceService } from '../../../../service/products/products-service.service';
import { SubscriptionComponent } from '../../../../components/subscription/subscription.component';


@Component({
  selector: 'app-men-category',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterModule,
    FontAwesomeModule,
    NgFor,
    SpinnerComponent,
    ProductCardComponent,
    NgIf,
    SubscriptionComponent
  ],
  templateUrl: './men-category.component.html',
  styleUrl: './men-category.component.scss'
})
export class MenCategoryComponent implements OnInit {
  faSearch = faSearch

  error: string = ''
  isLoading: boolean = true
  backgroundImage = 'https://img.freepik.com/free-photo/cheerful-young-woman-stylish-red-dress-holding-shopping-bags-smiling-buying-promo-offe_1258-158700.jpg?t=st=1717413502~exp=1717417102~hmac=4769e3f055b224f98299c3b2b03f8d48ec7a49484a5da2a05dcca1bdf8061385&w=1380'

  products: Products[] = []

  constructor(private ps: ProductsServiceService) {}

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe({
      next: (response: Products[]) => {
        this.products = response.filter(item => item.category.toLowerCase() === 'men')
        this.isLoading = false
      },
      error: (err: string) => {
        this.error = err
        this.isLoading = false
      }
    })
  }
}
