import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  styleUrl: './breadcrumbs.component.css',
  template: `
    <nav class="breadcrumbs-nav">
      @for (crumb of breadcrumbs(); track crumb.to) {
        @if (!$first) {
          <span> > </span>
        }
        @if ($last) {
          <span class="breadcrumbs-nav__last">{{ crumb.label }}</span>
        } @else {
          <a [routerLink]="crumb.to">{{ crumb.label }}</a>
        }
      }
    </nav>
  `,
})
export class BreadcrumbsComponent {
  private readonly breadcrumbService = inject(BreadcrumbsService);

  public readonly breadcrumbs = this.breadcrumbService.breadcrumbs;
}
