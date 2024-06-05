import { Component, OnInit } from '@angular/core';
import { Products } from '../../model/products';
import { ProductsServiceService } from '../../service/products/products-service.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SubscriptionComponent } from '../../components/subscription/subscription.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    NavbarComponent, 
    FooterComponent, 
    SpinnerComponent, 
    NgFor, 
    NgIf,
    CurrencyPipe,
    RouterModule,
    SubscriptionComponent,
    ProductCardComponent
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  public productDetails: Products = {} as Products
  public isLoading: boolean = true
  public error: string = ''
  public recentlyViewedProducts: Products[] = []

  constructor(private ps: ProductsServiceService, private activatedRoute: ActivatedRoute) {} 

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (param) => {
        let id: string | null = param.get('id')
        if(id !== null) this.getProductDetails(id)
      })
      this.loadRecentlyViewedProducts()
  }

  getProductDetails(id: string) {
    this.isLoading = true
    this.ps.getAllProducts().subscribe({
      next: (response) => {
        const product = response.find(res => res.id.toString() === id)
        if(product) {
          this.productDetails = product
          this.addToRecentlyViewedProducts(product)
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

  addToRecentlyViewedProducts(product: Products): void {
    const maxRecentlyViewed = 6
    let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]')

    recentlyViewed = recentlyViewed.filter((p: Products) => p.id !== product.id)
    
    recentlyViewed.unshift(product)
    
    if (recentlyViewed.length > maxRecentlyViewed) {
      recentlyViewed.pop()
    }

    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed))
    this.loadRecentlyViewedProducts()
  }

  loadRecentlyViewedProducts(): void {
    this.recentlyViewedProducts = JSON.parse(localStorage.getItem('recentlyViewed') || '[]')
  }
}