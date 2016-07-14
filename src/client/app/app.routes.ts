import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { DocsRoutes } from './+docs/index';
import { ButtonsRoutes } from './+buttons/index';

const routes: RouterConfig = [
  ...AboutRoutes,
  ...DocsRoutes,
  ...ButtonsRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
