import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MainComponent } from '../main/main.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, FooterComponent, MainComponent, BreadcrumbsComponent],
  styleUrl: './layout.component.css',
  template: `
    <div>
      <app-header />
      <app-breadcrumbs />
      <app-main />
      <app-footer />
    </div>
  `,
})
export class LayoutComponent {}
