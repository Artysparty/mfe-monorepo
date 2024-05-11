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
  @Output() sendSlMessage = new EventEmitter<string>();

  addButtonPushed = false;

  closeModal() {
    this.closeModalEvent.emit();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  sendSlEvent() {
    this.addButtonPushed = true;
    setTimeout(() => {
      this.addButtonPushed = false;
    }, 2000)
    this.sendSlMessage.emit(
      this.data?.ingredients?.map((el) => el.name).join(',')
    );
  }
}
