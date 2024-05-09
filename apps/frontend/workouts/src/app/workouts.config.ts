import { ApplicationConfig } from '@angular/core';

import { routes } from './workouts.routes';
import { provideRouter } from '@angular/router';

export const workoutsConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
