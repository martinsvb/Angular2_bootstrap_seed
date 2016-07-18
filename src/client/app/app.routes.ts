import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { DocsRoutes } from './+docs/index';
import { ButtonsRoutes } from './+buttons/index';
import { DatepickerRoutes } from './+datepicker/index';
import { EditorRoutes } from './+editor/index';

const routes: RouterConfig = [
  ...AboutRoutes,
  ...DocsRoutes,
  ...ButtonsRoutes,
  ...DatepickerRoutes,
  ...EditorRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
