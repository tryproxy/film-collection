import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTES } from '../../config/routes';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <nav>
      <ul>
        <li>
          <a [routerLink]="[ROUTES.HOME.to]">Home</a>
        </li>
        <li>
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
