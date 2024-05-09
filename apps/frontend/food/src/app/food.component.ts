import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodMock } from './mocks/food-mock';
import { FoodDialogComponent } from './components/food-dialog/food-dialog.component';
import { NgFor, NgIf } from '@angular/common';
import { Food } from './types/food.type';
import { ItemCardComponent } from '@ng-mf/shared';

@Component({
  selector: 'wr-food-food-root',
  standalone: true,
  imports: [RouterOutlet, ItemCardComponent, FoodDialogComponent, NgIf, NgFor],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss',
})
export class FoodComponent {
  foods = FoodMock;
  selectedFood!: Food;
  isModalOpen = false;

  closeModal() {
    this.isModalOpen = false;
  }

  selectFood(food: Food): void {
    this.selectedFood = food;
    this.isModalOpen = true;
  }
}
