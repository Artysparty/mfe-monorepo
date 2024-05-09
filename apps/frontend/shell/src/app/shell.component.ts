import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebsocketService } from '@ng-mf/shared';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'wr-shell-root',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  constructor(private wsService: WebsocketService) {}

  ngOnInit(): void {
    this.listenToWebSocketEvents();
    this.emitWebSocketEventAfterDelay();
  }

  private listenToWebSocketEvents(): void {
    this.wsService
      .listen('workouts')
      .pipe(untilDestroyed(this))
      .subscribe((data) => {});

    this.wsService
      .listen('connected')
      .pipe(untilDestroyed(this))
      .subscribe((data) => {});
  }

  private emitWebSocketEventAfterDelay(): void {
    setTimeout(() => {
      this.wsService.emit('workouts', 'asdasd');
    }, 5000);
  }
}
