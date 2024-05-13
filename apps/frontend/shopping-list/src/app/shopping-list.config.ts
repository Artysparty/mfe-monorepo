import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './shopping-list.routes';
import { WebsocketService } from '@ng-mf/shared';

export const shoppingListConfig: ApplicationConfig = {
  providers: [provideRouter(routes), WebsocketService]
};
