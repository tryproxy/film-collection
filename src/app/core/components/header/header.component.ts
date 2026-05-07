import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTES } from '../../../shared/config/routes';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <a [routerLink]="[ROUTES.HOME.to]">Home</a>
        </li>
        <li class="nav__item">
          <a [routerLink]="[ROUTES.ABOUT.to]">About</a>
        </li>
      </ul>
    </nav>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public readonly ROUTES = ROUTES;
}
