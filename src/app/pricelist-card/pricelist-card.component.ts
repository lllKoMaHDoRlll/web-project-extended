import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricelistCard } from '../pricelist-card';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-pricelist-card',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './pricelist-card.component.html',
  styleUrl: './pricelist-card.component.css'
})
export class PricelistCardComponent {
  @Input() pricelistCard!: PricelistCard;
  faCheck = faCheck;

  parseCardIsMain() {
    if (this.pricelistCard.isMainOption) {
      return "main-option option";
    }
    else {
      return "option"
    }
  }
}
