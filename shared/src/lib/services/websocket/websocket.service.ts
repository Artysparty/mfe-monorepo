import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private readonly maxReconnectAttempts = 3;
  private reconnectAttempts = 0;
  private socket!: Socket;

  constructor() {
    this.connect();
  }

  private connect(): void {
    this.socket = io(environment.ws);

    this.socket.on('connect', () => {
      console.log('Connected to websocket')
      this.reconnectAttempts = 0;
    });

    this.socket.on('disconnect', () => {
      if (this.reconnectAttempts < this.maxReconnectAttempts) {
        this.reconnectAttempts++;
        this.connect();
      }
    });
  }

  listen(eventName: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data);
      });
    });
  }

  emit(eventName: string, data: any): void {
    this.socket.emit(eventName, data);
  }
}
