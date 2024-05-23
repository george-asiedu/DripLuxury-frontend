import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { ExploreComponent } from './explore/explore.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { BigSavingComponent } from './big-saving/big-saving.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent, 
    CarouselComponent, 
    ExploreComponent,
    NewArrivalsComponent,
    BigSavingComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
