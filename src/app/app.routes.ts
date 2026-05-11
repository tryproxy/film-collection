import type { Routes } from '@angular/router';
import { HomeComponent as HomePage } from './features/home/home.component';
import { LayoutComponent as Layout } from './core/components/layout/layout.component';
import { ROUTES } from './shared/config/routes';

const detailsPage = () =>
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
        title: ROUTES.HOME.meta.title,
        component: HomePage,
      },
      {
        path: ROUTES.DETAILS.path,
        title: ROUTES.DETAILS.meta.title,
        loadComponent: detailsPage,
      },
      {
        path: ROUTES.ABOUT.path,
        title: ROUTES.ABOUT.meta.title,
        loadComponent: aboutPage,
      },
      {
        path: '**',
        loadComponent: notFoundPage,
      },
    ],
  },
];
