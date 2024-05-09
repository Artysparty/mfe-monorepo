import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '../../types/food.type';

@Component({
  selector: 'wr-food-food-dialog',
  standalone: true,
  imports: [NgFor],
  templateUrl: './food-dialog.component.html',
  styleUrl: './food-dialog.component.scss',
})
export class FoodDialogComponent {
  @Input() data!: Food;
  @Output() closeModalEvent = new EventEmitter();

  closeModal() {
    this.closeModalEvent.emit();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
