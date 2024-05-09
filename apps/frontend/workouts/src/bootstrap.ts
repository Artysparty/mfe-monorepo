import { bootstrapApplication } from '@angular/platform-browser';
import { workoutsConfig } from './app/workouts.config';
import { WorkoutsComponent } from './app/workouts.component';

bootstrapApplication(WorkoutsComponent, workoutsConfig)
  .catch((err) => console.error(err));
