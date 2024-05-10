import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import {
  ItemCardComponent,
  TOPICS,
  MESSAGES,
  WebsocketService,
} from '@ng-mf/shared';

import { FoodMock } from './mocks/food-mock';
import { FoodDialogComponent } from './components/food-dialog/food-dialog.component';
import { Food } from './types/food.type';

@UntilDestroy()
@Component({
  selector: 'wr-food-food-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ItemCardComponent,
    FoodDialogComponent,
    NgIf,
    NgFor,
    AsyncPipe,
  ],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss',
})
export class FoodComponent implements OnInit {
  foods = FoodMock;
  selectedFood!: Food;
  isModalOpen = false;
  showWorkoutAlert = false;

  constructor(private wsService: WebsocketService) {
    this.listenToWebSocketEvents();
  }

  ngOnInit(): void {
    this.wsService.emit(TOPICS.actions, MESSAGES.getWorkouts);
  }

  private listenToWebSocketEvents(): void {
    this.wsService
      .listen(TOPICS.workouts)
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        if (data?.text === MESSAGES.workoutStarted) {
          this.showWorkoutAlert = true;
        } else {
          this.showWorkoutAlert = false;
        }
      });
  }
  closeModal() {
    this.isModalOpen = false;
  }

  selectFood(food: Food): void {
    this.selectedFood = food;
    this.isModalOpen = true;
  }
}
