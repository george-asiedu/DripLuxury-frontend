import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Products } from '../../model/products';
import { ProductsServiceService } from '../../service/products/products-service.service';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  faChevronRight = faChevronRight
  faChevronUp = faChevronUp
  error: string = ''

  products: Products[] = []
  filteredProducts: Products[] = []

  constructor(private ps: ProductsServiceService) {}

  ngOnInit(): void {
      this.ps.getAllProducts().subscribe({
        next: (response: Products[]) => {
          this.products = response.filter(item => item.category.toLowerCase() === 'men')
          this.filteredProducts = response.filter(item => item.category.toLowerCase() === 'men')
        },
        error: (err) => {
          this.error = err
        }
      })
  }

  
}