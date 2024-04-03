import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamEmployee } from '../team-employee';
import { TeamEmployeeComponent } from '../team-employee/team-employee.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    CommonModule,
    TeamEmployeeComponent
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  readonly imageBaseFilePath = "assets/images/team";
  readonly teamEmployeesList: TeamEmployee[] = [
    {
      imageFilePath: `${this.imageBaseFilePath}/empl0.jpg`,
      name: "Aleksandr",
      position: "Director of the company"
    },
    {
      imageFilePath: `${this.imageBaseFilePath}/empl1.jpg`,
      name: "Natalia",
      position: "General Manager, co-owner"
    },
    {
      imageFilePath: `${this.imageBaseFilePath}/empl3.jpg`,
      name: "Boris",
      position: "Barista"
    },
    {
      imageFilePath: `${this.imageBaseFilePath}/empl4.jpg`,
      name: "Fedor",
      position: "Administrator, employee of the hall"
    },
    {
      imageFilePath: `${this.imageBaseFilePath}/empl5.jpg`,
      name: "Elizabeth",
      position: "Employee of the hall"
    },
    {
      imageFilePath: `${this.imageBaseFilePath}/empl2.jpg`,
      name: "Simon",
      position: "Barista"
    }
  ];
}
