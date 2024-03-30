import { SupportCard } from './../supportcard';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportCardComponent } from '../support-card/support-card.component';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [
    CommonModule,
    SupportCardComponent
  ],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  readonly imagesBaseFilePath: string = "assets/images/support-cards";

  readonly supportCardsList: SupportCard[] = [
    {
      id: 1,
      title: "Order online",
      body: "You don't have to stand in line to place an order. do it in our application or on the website",
      imageFileName: `${this.imagesBaseFilePath}/support1.svg`
    },
    {
      id: 2,
      title: "Not the target audience",
      body: "Our establishment is not suitable for people who are allergic to cute cats",
      imageFileName: `${this.imagesBaseFilePath}/support2.svg`
    },
    {
      id: 3,
      title: "The possibility of development",
      body: "You can take special courses with us and learn how to fix coffee machines",
      imageFileName: `${this.imagesBaseFilePath}/support3.svg`
    },
    {
      id: 4,
      title: "Personal barista",
      body: "During your stay at the coffee cat, you can choose the person who will serve you, if he is available",
      imageFileName: `${this.imagesBaseFilePath}/support4.svg`
    },
    {
      id: 5,
      title: "Easy operation",
      body: "We accept cards from any bank, even electronic money: WebMoney, Yandex.Money, Paypal",
      imageFileName: `${this.imagesBaseFilePath}/support5.svg`
    },
    {
      id: 6,
      title: "Work with investors",
      body: "We are ready to consider any investor proposals if we are talking about cats",
      imageFileName: `${this.imagesBaseFilePath}/support6.svg`
    },
    {
      id: 7,
      title: "Full-time specialists",
      body: "We employ the best baristas from all over the world",
      imageFileName: `${this.imagesBaseFilePath}/support7.svg`
    },
    {
      id: 8,
      title: "Ready to interact",
      body: "Meetings are held every week to improve the service, where you can send your question or suggestion",
      imageFileName: `${this.imagesBaseFilePath}/support8.svg`
    }
  ];
}
