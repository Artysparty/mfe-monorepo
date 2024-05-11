import { bootstrapApplication } from '@angular/platform-browser';
import { shoppingListConfig } from './app/shopping-list.config';
import { ShoppingListComponent } from './app/shopping-list.component';

bootstrapApplication(ShoppingListComponent, shoppingListConfig).catch((err) =>
  console.error(err)
);
