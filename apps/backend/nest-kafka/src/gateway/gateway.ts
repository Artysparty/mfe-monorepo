import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';

import { ProducerService } from '../kafka/producer.service';

@WebSocketGateway(3001, { cors: true })
export class WebsocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger: Logger = new Logger('WebsocketGateway');

  constructor(private readonly producerService: ProducerService) {}

  @WebSocketServer() server: Server;

  afterInit() {
    this.logger.log('WebsocketGateway Initialized');
  }

  handleConnection(client: Socket) {
    this.logger.log(`New client connected: ${client.id}`);
    client.emit('connected', 'Successfully connected to the server.');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('workouts')
  async handleWorkoutsMessage(
    client: Socket,
    text: string,
  ): Promise<WsResponse<string>> {
    this.logger.log('received message from workouts: ' , text);
    await this.producerService.produce({
      topic: 'workouts',
      messages: [{ value: text }],
    });
    return { event: 'workouts', data: text };
  }

  @SubscribeMessage('food')
  async handleFoodMessage(
    client: Socket,
    text: string,
  ): Promise<WsResponse<string>> {
    this.logger.log('received message from food: ' , text);
    await this.producerService.produce({
      topic: 'food',
      messages: [{ value: text }],
    });
    return { event: 'food', data: text };
  }

  sendToClient(topic: string, message: string): void {
    this.server.emit(topic, { text: message });
  }
}
