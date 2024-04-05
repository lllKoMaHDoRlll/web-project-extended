import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormHandlerService } from '../form-handler.service';

@Component({
  selector: 'app-request-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './request-form.component.html',
  styleUrl: './request-form.component.css',
})
export class RequestFormComponent {
  formHandlerService: FormHandlerService = inject(FormHandlerService);

  applyForm = new FormGroup({
    name: new FormControl(localStorage.getItem('user-name')),
    phone: new FormControl(localStorage.getItem('user-phone')),
    email: new FormControl(localStorage.getItem('user-email')),
    message: new FormControl(localStorage.getItem('user-message')),
    acception: new FormControl(localStorage.getItem('user-acception')),
  });

  submitApplication() {
    this.formHandlerService.submitApplication(this.applyForm);
  }

  onChange(event: any) {
    localStorage.setItem(event.target.id, event.target.value);
  }
}
