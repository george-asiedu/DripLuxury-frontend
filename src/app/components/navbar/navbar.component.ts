import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faHeart, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  faSearch = faSearch
  faHeart = faHeart
  faUser = faUser
  faShoppingCart = faShoppingCart

  openSideNav(): void {
    document.getElementById("sidenav")!.style.width = "100%"
  }

  closeSideNav(): void {
    document.getElementById("sidenav")!.style.width = "0"
  }
}