import { provideRouter, RouterConfig } from '@angular/router';

import { HomeRoutes } from './+home/index';
import { DocsRoutes } from './+docs/index';
import { ButtonsRoutes } from './+buttons/index';
import { DatepickerRoutes } from './+datepicker/index';
import { NewsRoutes } from './+news/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...DocsRoutes,
  ...ButtonsRoutes,
  ...DatepickerRoutes,
  ...NewsRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
