import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './food.routes';
import { WebsocketService } from '@ng-mf/shared';

export const foodConfig: ApplicationConfig = {
  providers: [provideRouter(routes), WebsocketService]
};
