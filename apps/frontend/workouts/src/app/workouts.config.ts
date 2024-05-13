import { ApplicationConfig } from '@angular/core';

import { routes } from './workouts.routes';
import { provideRouter } from '@angular/router';
import { WebsocketService } from '@ng-mf/shared';

export const workoutsConfig: ApplicationConfig = {
  providers: [provideRouter(routes), WebsocketService]
};
