import { bootstrapApplication } from '@angular/platform-browser';
import { homepageConfig } from './app/homepage.config';
import { HomepageComponent } from './app/homepage.component';

bootstrapApplication(HomepageComponent, homepageConfig)
  .catch((err) => console.error(err));
