import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'food',
    loadChildren: () => import('food/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'workouts',
    loadChildren: () => import('workouts/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'homepage',
    loadChildren: () => import('homepage/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
