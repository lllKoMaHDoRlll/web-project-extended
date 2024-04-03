import { TeamEmployee } from './../team-employee';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-employee',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './team-employee.component.html',
  styleUrl: './team-employee.component.css'
})
export class TeamEmployeeComponent {
  @Input() teamEmployee!: TeamEmployee;
}
