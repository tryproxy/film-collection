import type { Routes } from '@angular/router';
import { HomeComponent as HomePage } from './features/home/home.component';
import { LayoutComponent as Layout } from './shared/components/layout/layout.component';
import { ROUTES } from './shared/config/routes';

const filmDetailsPage = () =>
  import('./features/film-details/film-details.component').then(
    ({ FilmDetailsComponent }) => FilmDetailsComponent,
  );
const notFoundPage = () =>
  import('./features/not-found/not-found.component').then(
    ({ NotFoundComponent }) => NotFoundComponent,
  );
const aboutPage = () =>
  import('./features/about/about.component').then(({ AboutComponent }) => AboutComponent);

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
        path: ROUTES.ABOUT.path,
        title: 'About',
        loadComponent: aboutPage,
      },
      {
        path: '**',
        loadComponent: notFoundPage,
      },
    ],
  },
];
