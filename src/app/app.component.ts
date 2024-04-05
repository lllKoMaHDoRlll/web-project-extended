import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { ServicesComponent } from './services/services.component';
import { SupportComponent } from './support/support.component';
import { ExperienceComponent } from './experience/experience.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { CasesComponent } from './cases/cases.component';
import { TeamComponent } from './team/team.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ClientsComponent } from './clients/clients.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { FooterComponent } from './footer/footer.component';
import { ModalFormComponent } from './modal-form/modal-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ThumbnailComponent,
    ServicesComponent,
    SupportComponent,
    ExperienceComponent,
    PricelistComponent,
    CasesComponent,
    TeamComponent,
    ReviewsComponent,
    ClientsComponent,
    RequestFormComponent,
    FooterComponent,
    ModalFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
}
