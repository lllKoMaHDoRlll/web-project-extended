import { Component, Input } from '@angular/core';
import { ThumbnailAchievement } from '../thumbnailachievement';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thumbnail-achievement',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './thumbnail-achievement.component.html',
  styleUrl: './thumbnail-achievement.component.css'
})
export class ThumbnailAchievementComponent {
  @Input() thumbnailAchievement!: ThumbnailAchievement;
}
