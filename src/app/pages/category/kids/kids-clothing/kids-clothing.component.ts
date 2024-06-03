import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SpinnerComponent } from '../../../../components/spinner/spinner.component';
import { SidebarComponent } from '../../../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../../../components/navbar/navbar.component';
import { ProductCardComponent } from '../../../../components/product-card/product-card.component';
import { FooterComponent } from '../../../../components/footer/footer.component';
import { Products } from '../../../../model/products';
import { ProductsServiceService } from '../../../../service/products/products-service.service';

@Component({
  selector: 'app-kids-clothing',
  standalone: true,
  imports: [NgFor, SpinnerComponent, SidebarComponent, NavbarComponent, ProductCardComponent, FooterComponent],
  templateUrl: './kids-clothing.component.html',
  styleUrl: './kids-clothing.component.scss'
})
export class KidsClothingComponent {
  error: string = ''
  isLoading: boolean = true

  products: Products[] = []
  filteredProducts: Products[] = []

  constructor(private ps: ProductsServiceService) {}

  ngOnInit(): void {
      this.ps.getAllProducts().subscribe({
        next: (response: Products[]) => {
          this.products = response.filter(item => item.category.toLowerCase() === 'kids')
          this.isLoading = false
        },
        error: (err) => {
          this.error = err
          this.isLoading = false
        }
      })
  }
}