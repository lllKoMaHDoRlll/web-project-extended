import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {
  MatBottomSheetModule,
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FontAwesomeModule,
    MatMenuModule,
    MatButtonModule,
    MatBottomSheetModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faAngleDown = faAngleDown;
  faBars = faBars;

  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomMenuSheet(): void {
    this._bottomSheet.open(BottomMenuSheet);
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `
    <mat-nav-list>
      <a href="#company-thumbnail" mat-list-item (click)="openLink($event)">
        <span matListItemTitle>About</span>
      </a>
      <a href="#company-services" mat-list-item (click)="openLink($event)">
        <span matListItemTitle>Services</span>
      </a>
      <a href="#company-support" mat-list-item (click)="openLink($event)">
        <span matListItemTitle>Supports</span>
      </a>
      <a href="#pricelist" mat-list-item (click)="openLink($event)">
        <span matListItemTitle>Pricelist</span>
      </a>

      <a href="#company-reviews" mat-list-item (click)="openLink($event)">
        <span matListItemTitle>Reviews</span>
      </a>
    </mat-nav-list>
  `,
  standalone: true,
  imports: [MatListModule],
})
export class BottomMenuSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomMenuSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
  }
}
