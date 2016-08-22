import { provideRouter, RouterConfig } from '@angular/router';

import { HomeRoutes } from './+home/index';
import { DocsRoutes } from './+docs/index';
import { ButtonsRoutes } from './+buttons/index';
import { DatepickerRoutes } from './+datepicker/index';
import { NewsRoutes } from './+news/index';
import { LoginRoutes } from './+login/index';
import { RegisterRoutes } from './+register/index';
import { ProfileRoutes } from './+profile/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...DocsRoutes,
  ...ButtonsRoutes,
  ...DatepickerRoutes,
  ...NewsRoutes,
  ...LoginRoutes,
  ...RegisterRoutes,
  ...ProfileRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
