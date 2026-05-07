import { Component, inject } from '@angular/core';
import { BreadcrumbsService } from '../../core/services/breadcrumbs.service';
import { BREADCRUMBS } from '../../shared/config/routes';

@Component({
  selector: 'app-about',
  imports: [],
  template: ` <p>about works!</p> `,
  styleUrl: './about.component.css',
})
export class AboutComponent {
  private readonly breadcrumbsService = inject(BreadcrumbsService);

  public constructor() {
    this.breadcrumbsService.setBreadcrumbs(BREADCRUMBS.about());
  }
}
