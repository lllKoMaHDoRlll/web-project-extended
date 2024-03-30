import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { ServiceCard } from '../servicecard';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    ServiceCardComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  readonly imagesBaseFilePath: string = "assets/images/service-cards";

  readonly serviceCardsList: ServiceCard[] = [
    {
      imageFileName: `${this.imagesBaseFilePath}/1.png`,
      body: "We use the best coffee beans"
    },
    {
      imageFileName: `${this.imagesBaseFilePath}/2.png`,
      body: "We have the furry cats ourselves"
    },
    {
      imageFileName: `${this.imagesBaseFilePath}/3.png`,
      body: "The coffee house has the most cozy and fluffy atmosphere"
    },
    {
      imageFileName: `${this.imagesBaseFilePath}/4.png`,
      body: "There are plenty of board games for relaxing with your kitty friends"
    },
    {
      imageFileName: `${this.imagesBaseFilePath}/5.png`,
      body: "You can't feed the seals, just play with them"
    },
    {
      imageFileName: `${this.imagesBaseFilePath}/6.png`,
      body: "In addition to coffee, there are items on the menu for a full lunch"
    },
    {
      imageFileName: `${this.imagesBaseFilePath}/7.png`,
      body: "The best cats. The best cats"
    },
    {
      imageFileName: `${this.imagesBaseFilePath}/8.png`,
      body: "We take a responsible approach to the selection of personnel"
    }
  ];
}
