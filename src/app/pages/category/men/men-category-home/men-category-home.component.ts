import {Component, OnInit} from '@angular/core';
import {NgFor, NgIf} from "@angular/common";
import {SpinnerComponent} from "../../../../components/spinner/spinner.component";
import {ProductCardComponent} from "../../../../components/product-card/product-card.component";
import {Products} from "../../../../model/products";
import {ProductsServiceService} from "../../../../service/products/products-service.service";
import {RouterModule} from "@angular/router";
import { SubscriptionComponent } from '../../../../components/subscription/subscription.component';


@Component({
  selector: 'app-men-category-home',
  standalone: true,
    imports: [
      NgFor,
      NgIf,
      SpinnerComponent,
      ProductCardComponent,
      RouterModule
    ],
  templateUrl: './men-category-home.component.html',
  styleUrl: './men-category-home.component.scss'
})
export class MenCategoryHomeComponent implements OnInit {
  error: string = ''
  isLoading: boolean = true
  backgroundImage = 'https://img.freepik.com/free-photo/cheerful-young-woman-stylish-red-dress-holding-shopping-bags-smiling-buying-promo-offe_1258-158700.jpg?t=st=1717413502~exp=1717417102~hmac=4769e3f055b224f98299c3b2b03f8d48ec7a49484a5da2a05dcca1bdf8061385&w=1380'
  // vacationWear = 'https://img.freepik.com/free-photo/gorgeous-woman-with-dark-skin-jeans-straw-hat-posing-studio-white-background-with-bag-bali-style-sopping-mood_273443-179.jpg?t=st=1717510052~exp=1717513652~hmac=98b071d54a9b49526d5283b34e055c940c5a667cdcb3822923b6afa022252669&w=1380'
  vacationWear = 'https://img.freepik.com/free-photo/young-adult-red-shirt-posing-really-confident_23-2148638777.jpg?t=st=1717516799~exp=1717520399~hmac=0483727b3d31ea4102da89b9f795e1975bce887aaef798083d8037e5c908b5de&w=740'
  shirt = 'https://img.freepik.com/free-photo/portrait-sensual-black-young-model-unlabeled-white-t-shirt-light-blue-jeans-wearing-vintage-digital-watch_346278-1000.jpg?t=st=1717511474~exp=1717515074~hmac=83a83b4b332a77c50f8f0d6e0d4746042565e32ea64d28659c776db0853f77bc&w=740'
  shoesImage = 'https://img.freepik.com/free-photo/elegant-black-leather-shoes-men-black-background-photo-studio-style-ai-generative_123827-23442.jpg?t=st=1717514114~exp=1717517714~hmac=a4fbf9ecf2500c738611ddf7a6c2774ec4501c4522d4fa72a2b33c686955067c&w=740'
  shades = 'https://img.freepik.com/free-photo/outdoor-portrait-attractive-fashionable-dark-skinned-man-wearing-mirrored-lens-shades-hat-relaxing-summer-day-urban-restaurant-hiding-from-burning-sun-rays-shadow-by-window_273609-1230.jpg?t=st=1717518234~exp=1717521834~hmac=b9f0488efb50af47c50a1b9e95388404d5a9e53ddd00c7d0a3e4d919400f152c&w=740'
  bags = 'https://img.freepik.com/free-photo/retro-brown-man-leather-bag-notebook-bright-colorful-summer-grass-park_158538-12177.jpg?t=st=1717518679~exp=1717522279~hmac=5612fba7b244f28819ae0ab1661ba16de0e6948bdd08a513f80951b6bfd0dfb6&w=740'
  watch = 'https://img.freepik.com/free-photo/man-suit-clasping-his-hands_181624-26326.jpg?t=st=1717519213~exp=1717522813~hmac=b05b78cfe3be41d3c4bed99390733f8fce8d2cd47db69cf3a091254f0ab1609e&w=740'
  sneakers = 'https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-135206.jpg?t=st=1717519370~exp=1717522970~hmac=2035b308eed3431b76b2cd8857d1d28bf6edc3328e192dc6cea5e92dd3cae037&w=740'
  products: Products[] = []
  newIn: Products[] = []

  constructor(private ps: ProductsServiceService) {}

  ngOnInit() {
    this.ps.getMenProducts(4).subscribe({
      next: (res: Products[]) => {
        this.products = res
        this.isLoading = false
      },
      error: (err: string) => {
        this.error = err
        this.isLoading = false
      }
    })

    this.ps.getAllProducts().subscribe((res: Products[]) => {
      this.newIn = res.filter(product => product.type === 'new in' && product.category.toLowerCase() === 'men')
    })
  }
}
