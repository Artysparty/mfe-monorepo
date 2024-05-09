import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-shared-item-card',
  standalone: true,
  imports: [ NgClass, NgStyle, NgIf ],
  providers: [],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  @Input() name!: string;
  @Input() calories!: number;
  @Input() duration!: string;
  @Input() imageUrl!: string;
  @Input() fullWidth = false;
  @Input() bottomName = false;
}
