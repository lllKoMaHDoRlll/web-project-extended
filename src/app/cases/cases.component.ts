import { CaseCard } from './../case-card';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesCardComponent } from '../cases-card/cases-card.component';

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [
    CommonModule,
    CasesCardComponent
  ],
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.css'
})
export class CasesComponent {
  readonly imageBasePath = "assets/images/cases-cards";

  readonly CaseCardsList: CaseCard[] = [
    {
      imageFilePath: `${this.imageBasePath}/1.jpg`,
      title: "It is impossible not to share",
      date: "23.11.21",
      body: "Ginger the cat extorts sweets from visitors with a similar look",
      type: 1
    },
    {
      imageFilePath: `${this.imageBasePath}/2.jpg`,
      title: "Incredible musical achievements",
      date: "18.02.22",
      body: "One of our cats has become a famous rapper",
      type: 2
    },
    {
      imageFilePath: `${this.imageBasePath}/3.jpg`,
      title: "Barista of the Year Award",
      date: "04.03.22",
      body: 'Boris the cat became the TV presenter of the year on the channel "meow what coffee"',
      type: 1
    },
    {
      imageFilePath: `${this.imageBasePath}/4.jpg`,
      title: "Unforgettable feelings",
      date: "11.06.22",
      body: "A new kind of coffee drives even cats crazy",
      type: 1
    },
    {
      imageFilePath: `${this.imageBasePath}/5.webp`,
      title: "Nice bonuses",
      date: "05.08.23",
      body: "A photo shoot was arranged for the furriest cat as a thank you for his fluffiness",
      type: 1
    },
    {
      imageFilePath: `${this.imageBasePath}/6.jpg`,
      title: "Records",
      date: "24.12.23",
      body: "Unbelievable! Murzik fit into the container!",
      type: 2
    },
    {
      imageFilePath: `${this.imageBasePath}/7.jpg`,
      title: "A little scandal",
      date: "04.01.24",
      body: "Egor the cat accidentally spat fur on the client",
      type: 1
    },
  ];

  parseCardType(caseCard: CaseCard) {
    if (caseCard.type == 1) {
      return "case type1";
    }
    else {
      return "case type2";
    }
  }
}
