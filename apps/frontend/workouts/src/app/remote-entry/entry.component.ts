import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'wr-workouts-workouts-entry',
  template: `<wr-workouts-nx-welcome></wr-workouts-nx-welcome>`,
})
export class RemoteEntryComponent {}
