import { Routes } from '@angular/router';

import { loadRemoteModule } from '@angular-architects/native-federation';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      loadRemoteModule('homepage', './Component').then((m) => m.HomepageComponent),
    pathMatch: 'full',
  },
  {
    path: 'workouts',
    loadComponent: () =>
      loadRemoteModule('workouts', './Component').then((m) => m.WorkoutsComponent),
  },
  {
    path: 'food',
    loadComponent: () =>
      loadRemoteModule('food', './Component').then((m) => m.FoodComponent),
  },
  {
    path: 'shopping-list',
    loadComponent: () =>
      loadRemoteModule('shopping-list', './Component').then((m) => m.ShoppingListComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      loadRemoteModule('homepage', './Component').then((m) => m.HomepageComponent),
  },
];
