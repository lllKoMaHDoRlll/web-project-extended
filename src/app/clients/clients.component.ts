import { Component } from '@angular/core';
import { NgxSplideModule } from 'ngx-splide';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    NgxSplideModule,
    CommonModule
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  readonly imageBaseFilePath = "assets/images/clients";

  readonly slider1Options = {
    type: "loop",
    width: "140%",
    perMove: 1,
    perPage: 8,
    gap: "1em",
    autoWidth: true,
    arrows: false,
    pagination: false,
    drag: false,
    autoplay: true,
    interval: 4000,
    speed: 1200
  };

  readonly slider1ImagesList = [
    `${this.imageBaseFilePath}/1.webp`,
    `${this.imageBaseFilePath}/2.webp`,
    `${this.imageBaseFilePath}/3.webp`,
    `${this.imageBaseFilePath}/4.webp`,
    `${this.imageBaseFilePath}/1.webp`,
    `${this.imageBaseFilePath}/2.webp`,
    `${this.imageBaseFilePath}/3.webp`,
    `${this.imageBaseFilePath}/4.webp`
  ];

  readonly slider2Options = {
    type: "loop",
    width: "140%",
    perMove: 1,
    perPage: 10,
    gap: "1em",
    autoWidth: true,
    arrows: false,
    pagination: false,
    drag: false,
    autoplay: true,
    interval: 5000,
    speed: 1200,
  };

  readonly slider2ImagesList = [
    `${this.imageBaseFilePath}/5.webp`,
    `${this.imageBaseFilePath}/6.webp`,
    `${this.imageBaseFilePath}/7.webp`,
    `${this.imageBaseFilePath}/8.webp`,
    `${this.imageBaseFilePath}/5.webp`,
    `${this.imageBaseFilePath}/6.webp`,
    `${this.imageBaseFilePath}/7.webp`,
    `${this.imageBaseFilePath}/8.webp`
  ];

  onSliderInit(slider: HTMLElement) {
    console.log(slider.childNodes);
  }

}
