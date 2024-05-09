import { bootstrapApplication } from '@angular/platform-browser';
import { shellConfig } from './app/shell.config';
import { ShellComponent } from './app/shell.component';

bootstrapApplication(ShellComponent, shellConfig)
  .catch((err) => console.error(err));
