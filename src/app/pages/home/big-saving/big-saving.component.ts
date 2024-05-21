import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-big-saving',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './big-saving.component.html',
  styleUrl: './big-saving.component.scss'
})
export class BigSavingComponent {
  faArrowDown = faArrowDown
}
