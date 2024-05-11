import { AsyncPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MESSAGES, TOPICS, WebsocketService } from '@ng-mf/shared';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'wr-sl-sl-root',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent implements OnInit {

  list = [];

  constructor(private wsService: WebsocketService) {
    this.listenToWebSocketEvents();
  }

  ngOnInit() {
    this.wsService.emit(TOPICS.actions, MESSAGES.getShoppingList);
  }

  listenToWebSocketEvents(): void {
    this.wsService
      .listen(TOPICS.sl)
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        this.list = data?.text?.split(',');
      });
  }
}
