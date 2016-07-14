import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { DocsRoutes } from './+docs/index';

const routes: RouterConfig = [
  ...AboutRoutes,
  ...DocsRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
