import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricelistCardComponent } from '../pricelist-card/pricelist-card.component';
import { PricelistCard } from '../pricelist-card';

@Component({
  selector: 'app-pricelist',
  standalone: true,
  imports: [
    CommonModule,
    PricelistCardComponent
  ],
  templateUrl: './pricelist.component.html',
  styleUrl: './pricelist.component.css'
})
export class PricelistComponent {
  readonly pricelistCardsList: PricelistCard[] = [
    {
      name: "Basic",
      price: 200,
      odds: [
        "The validity period is 1 year",
        "Valid for all products",
        "It can be purchased not only in the coffee house, but also on the website",
        "A good way to mske your friend smile"
      ],
      isMainOption: false
    },
    {
      name: "Business",
      price: 500,
      odds: [
        "The validity period is 1 year",
        "Valid for all products",
        "It can be purchased not only in the coffee house, but also on the website",
        "A less budget option to please your friend"
      ],
      isMainOption: true
    },
    {
      name: "Basic",
      price: 200,
      odds: [
        "The validity period is 1 year",
        "Valid for all products",
        "It can be purchased not only in the coffee house, but also on the website",
        "One of the wonderful gifts for your friend"
      ],
      isMainOption: false
    }
  ];
}
