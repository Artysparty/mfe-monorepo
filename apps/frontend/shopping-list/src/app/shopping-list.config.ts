import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './shopping-list.routes';

export const shoppingListConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
