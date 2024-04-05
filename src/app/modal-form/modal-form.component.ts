import { Component } from '@angular/core';
import { RequestFormComponent } from '../request-form/request-form.component';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-modal-form',
  standalone: true,
  imports: [
    MatButtonModule,
    FontAwesomeModule,
    MatBottomSheetModule
  ],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.css'
})
export class ModalFormComponent {
  faHeadset = faHeadset;

  constructor (private _bottomSheet: MatBottomSheet) {

  }

  openModalForm(): void {
    this._bottomSheet.open(ModalFormSheet)
  }
}

@Component({
  selector: 'modal-form-sheet',
  template: `
    <app-request-form></app-request-form>
  `,
  standalone: true,
  imports: [
    RequestFormComponent
  ]
})
export class ModalFormSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<ModalFormSheet>) {}
}
