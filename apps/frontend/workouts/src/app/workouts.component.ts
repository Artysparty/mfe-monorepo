import { Component } from '@angular/core';

import { WorkoutsMock } from './mocks/workouts-mock';

import { ItemCardComponent } from '@ng-mf/shared';
import { WorkoutDialogComponent } from './components/workout-dialog/workout-dialog.component';
import { NgFor, NgIf } from '@angular/common';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Workout } from './types/workouts.type';

@UntilDestroy()
@Component({
  selector: 'wr-workouts-workouts-root',
  standalone: true,
  imports: [ItemCardComponent, WorkoutDialogComponent, NgFor, NgIf],
  providers: [],
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.scss',
})
export class WorkoutsComponent {
  readonly workoutsMock = WorkoutsMock;

  selectedWorkout!: Workout;

  isModalOpen = false;

  closeModal(): void {
    this.isModalOpen = false;
  }

  selectWorkout(workout: Workout): void {
    this.selectedWorkout = workout;
    this.isModalOpen = true;
  }
}
