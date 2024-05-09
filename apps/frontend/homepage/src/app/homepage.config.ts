import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './homepage.routes';

export const homepageConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
