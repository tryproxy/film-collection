import type { Routes } from '@angular/router';
import { HomeComponent as HomePage } from './features/home/home.component';
import { LayoutComponent as Layout } from './shared/components/layout/layout.component';
import { ROUTES } from './shared/config/routes';

const filmDetailsPage = () =>
  import('./features/film-details/film-details.component').then(m => m.FilmDetailsComponent);
const notFoundPage = () =>
  import('./features/not-found/not-found.component').then(m => m.NotFoundComponent);

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: ROUTES.HOME.path,
        title: 'Library',
        component: HomePage,
      },
      {
        path: ROUTES.DETAILS.path,
        title: 'Movie Details',
        loadComponent: filmDetailsPage,
      },
      {
        path: '**',
        loadComponent: notFoundPage,
      },
    ],
  },
];
