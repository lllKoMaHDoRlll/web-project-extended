import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportCard } from '../supportcard';

@Component({
  selector: 'app-support-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './support-card.component.html',
  styleUrl: './support-card.component.css'
})
export class SupportCardComponent {
  @Input() supportCard!: SupportCard;
}
