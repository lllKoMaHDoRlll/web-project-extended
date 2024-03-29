import { ThumbnailAchievement } from './../thumbnailachievement';
import { Component } from '@angular/core';
import { ThumbnailAchievementComponent } from '../thumbnail-achievement/thumbnail-achievement.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thumbnail',
  standalone: true,
  imports: [
    ThumbnailAchievementComponent,
    CommonModule
  ],
  templateUrl: './thumbnail.component.html',
  styleUrl: './thumbnail.component.css',
})
export class ThumbnailComponent {
  thumbnailAchievementsList: ThumbnailAchievement[] = [
    {
      title: '#1',
      body: 'Coffee store worldwide',
    },
    {
      title: '3+',
      body: 'Michelin stars received in 2017, 2019, 2023',
    },
    {
      title: '14',
      body: 'Types of coffee',
    },
    {
      title: '2000+',
      body: 'Employees enjoying making you a cup of coffee',
    },
    {
      title: '350 000',
      body: 'Total clients served',
    },
    {
      title: '200+',
      body: 'Coffee houses around the world',
    }
  ];
}
