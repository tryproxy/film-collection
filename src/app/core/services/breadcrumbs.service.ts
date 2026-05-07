import { Injectable, signal } from '@angular/core';

interface Breadcrumb {
  label: string;
  to: string;
}

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  private readonly breadcrumbsState = signal<Breadcrumb[]>([]);

  public readonly breadcrumbs = this.breadcrumbsState.asReadonly();

  public setBreadcrumbs(breadcrumbs: Breadcrumb[]) {
    this.breadcrumbsState.set(breadcrumbs);
  }
}
