export const ROUTES = {
  HOME: {
    path: '',
    to: '/',
    meta: { label: 'Home', title: 'Home Library' },
  },
  DETAILS: {
    path: 'details/:id',
    to: '/details',
    meta: { label: 'Details', title: 'Movie Details' },
  },
  ABOUT: {
    path: 'about',
    to: '/about',
    meta: { label: 'About', title: 'About Us' },
  },
};

export const BREADCRUMBS = {
  home: () => [{ label: ROUTES.HOME.meta.label, to: ROUTES.HOME.to }],
  about: () => [{ label: ROUTES.ABOUT.meta.label, to: ROUTES.ABOUT.to }],
  details: (id: number, label: string) => [
    { label: ROUTES.HOME.meta.label, to: ROUTES.HOME.to },
    { label, to: `${ROUTES.DETAILS.to}/${id}` },
  ],
};
