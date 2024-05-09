import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './food.routes';

export const foodConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
