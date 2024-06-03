import { Component } from '@angular/core';
import { Products } from '../../../../model/products';
import { ProductsServiceService } from '../../../../service/products/products-service.service';
import { NgFor } from '@angular/common';
import { SpinnerComponent } from '../../../../components/spinner/spinner.component';
import { NavbarComponent } from '../../../../components/navbar/navbar.component';
import { ProductCardComponent } from '../../../../components/product-card/product-card.component';
import { FooterComponent } from '../../../../components/footer/footer.component';
import { SidebarComponent } from '../../../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-women-clothing',
  standalone: true,
  imports: [NgFor, SpinnerComponent, NavbarComponent, ProductCardComponent, FooterComponent, SidebarComponent],
  templateUrl: './women-clothing.component.html',
  styleUrl: './women-clothing.component.scss'
})
export class WomenClothingComponent {
  error: string = ''
  isLoading: boolean = true

  products: Products[] = []
  filteredProducts: Products[] = []

  constructor(private ps: ProductsServiceService) {}

  ngOnInit(): void {
      this.ps.getAllProducts().subscribe({
        next: (response: Products[]) => {
          this.products = response.filter(item => item.category.toLowerCase() === 'women')
          this.isLoading = false
        },
        error: (err) => {
          this.error = err
          this.isLoading = false
        }
      })
  }
}