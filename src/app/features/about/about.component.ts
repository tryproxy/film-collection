import { Component, inject } from '@angular/core';
import { BreadcrumbsService } from '../../core/services/breadcrumbs.service';
import { BREADCRUMBS } from '../../shared/config/routes';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <section class="about">
      <h1>About Page</h1>
      <p>Nothing to see here</p>
    </section>
  `,
  styleUrl: './about.component.css',
})
export class AboutComponent {
  private readonly breadcrumbsService = inject(BreadcrumbsService);

  public constructor() {
    this.breadcrumbsService.setBreadcrumbs(BREADCRUMBS.about());
  }
}
