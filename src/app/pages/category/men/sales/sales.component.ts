import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../../components/footer/footer.component';
import { SidebarComponent } from '../../../../components/sidebar/sidebar.component';
import { Products } from '../../../../model/products';
import { ProductsServiceService } from '../../../../service/products/products-service.service';
import { SpinnerComponent } from '../../../../components/spinner/spinner.component';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { ProductCardComponent } from '../../../../components/product-card/product-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [
    NgFor,
    SpinnerComponent,
    NavbarComponent, 
    SidebarComponent, 
    ProductCardComponent,
    FooterComponent
  ],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent {
  error: string = ''
  isLoading: boolean = true

  products: Products[] = []
  filteredProducts: Products[] = []

  constructor(private ps: ProductsServiceService) {}

  ngOnInit(): void {
      this.ps.getAllProducts().subscribe({
        next: (response: Products[]) => {
          this.products = response.filter(item => item.category.toLowerCase() === 'men')
          this.isLoading = false
        },
        error: (err) => {
          this.error = err
          this.isLoading = false
        }
      })
  }
}