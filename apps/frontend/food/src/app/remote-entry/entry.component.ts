import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'wr-food-food-entry',
  template: `<wr-food-nx-welcome></wr-food-nx-welcome>`,
})
export class RemoteEntryComponent {}
