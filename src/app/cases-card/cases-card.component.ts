import { CaseCard } from './../case-card';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cases-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cases-card.component.html',
  styleUrl: './cases-card.component.css'
})
export class CasesCardComponent {
  @Input() caseCard!: CaseCard;
}
