import type { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { ROUTES } from './shared/config/routes';

const filmDetails = () =>
  import('./features/film-details/film-details.component').then(m => m.FilmDetailsComponent);

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ROUTES.HOME.path,
        title: 'Library',
        component: HomeComponent,
      },
      {
        path: ROUTES.DETAILS.path,
        title: 'Movie Details',
        loadComponent: filmDetails,
      },
    ],
  },
];
