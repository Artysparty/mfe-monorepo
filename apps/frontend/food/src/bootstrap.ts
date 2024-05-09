import { bootstrapApplication } from '@angular/platform-browser';
import { foodConfig } from './app/food.config';
import { FoodComponent } from './app/food.component';

bootstrapApplication(FoodComponent, foodConfig).catch((err) =>
  console.error(err)
);
