import { Component } from '@angular/core';
import { Review } from '../review';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  readonly logoBaseFilePath = "assets/images/reviews";
  readonly reviewsList: Review[] = [
    {
      logoFilePath: `${this.logoBaseFilePath}/1.jpg`,
      text: "The interior of the cafe is tastefully decorated with comfortable seating, quirky cat-themed artwork, and an array of cozy nooks where patrons can enjoy their coffee. The soft purring and playful antics of the resident feline companions create an incredibly soothing ambiance, making it an ideal spot to unwind and escape the hustle and bustle of daily life.",
      author: "Purr-fectly Delightful Experience at Coffee & Cats - Where Coffee Meets Feline Charm!"
    },
    {
      logoFilePath: `${this.logoBaseFilePath}/2.png`,
      text: "Speaking of espresso, the coffee at Coffee & Cats is nothing short of exceptional. The baristas display a mastery of their craft, ensuring that each cup is a work of art in both presentation and flavor. Whether you prefer a velvety latte, a bold Americano, or a perfectly brewed cappuccino, the menu offers a diverse selection to satisfy every coffee preference.",
      author: "A Feline Haven with a Side of Espresso Elegance at Coffee & Cats"
    },
    {
      logoFilePath: `${this.logoBaseFilePath}/3.jpg`,
      text: "What impressed me most about Coffee & Cats is their dedication to the well-being of the cats. The staff is attentive and knowledgeable, ensuring that both guests and feline friends coexist harmoniously. The hygiene standards are impeccable, and it's evident that the cats are happy, healthy, and well-cared-for members of the cafe community.",
      author: ""
    },
    {
      logoFilePath: `${this.logoBaseFilePath}/4.webp`,
      text: "Coffee & Cats is not just a coffee shop; it's a haven for cat enthusiasts and coffee lovers alike. My recent visit to this delightful establishment left me with a profound sense of joy and relaxation, and I can't wait to share my wonderful experience.",
      author: ""
    },
  ];
  currentPageIndex: number = 0;
  totalPages: number = 0;
  selectedReview: Review | undefined;

  constructor () {
    this.totalPages = this.reviewsList.length;
    if (this.totalPages > 0) {
      this.selectedReview = this.reviewsList[0];
    }
  }

  showNextReview() {
    this.currentPageIndex = (this.currentPageIndex + 1) % this.totalPages;
    this.selectedReview = this.reviewsList[this.currentPageIndex];
  }
  showPrevReview() {
    this.currentPageIndex = (this.currentPageIndex - 1) % this.totalPages;
    this.currentPageIndex = this.currentPageIndex < 0 ? this.currentPageIndex + 4 : this.currentPageIndex;
    this.selectedReview = this.reviewsList[this.currentPageIndex];
    console.log(this.currentPageIndex);
  }
}
