import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodMock } from './mocks/food-mock';
import { FoodDialogComponent } from './components/food-dialog/food-dialog.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Food } from './types/food.type';
import { ItemCardComponent, WebsocketService } from '@ng-mf/shared';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, Observable } from 'rxjs';

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
    AsyncPipe
  ],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss',
})
export class FoodComponent implements OnInit {
  foods = FoodMock;
  selectedFood!: Food;
  isModalOpen = false;
  showAlert = false;
  message$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private wsService: WebsocketService) {
    this.listenToWebSocketEvents();
  }

  ngOnInit(): void {
    this.wsService.emit('actions', 'getWorkouts')
  }

  private listenToWebSocketEvents(): void {
    this.wsService
      .listen('workouts')
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        if (data?.text === 'started') {
          this.showAlert = true;
          this.message$.next(data?.text);
        } else {
          this.showAlert = false;
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
