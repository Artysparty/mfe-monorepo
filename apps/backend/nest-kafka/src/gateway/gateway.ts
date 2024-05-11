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
import { ConsumerService } from '../kafka/consumer.service';

@WebSocketGateway(3001, { cors: true })
export class WebsocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger: Logger = new Logger('WebsocketGateway');

  constructor(
    private readonly producerService: ProducerService,
    private readonly consumerService: ConsumerService,
  ) {}

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
    await this.producerService.produce({
      topic: 'food',
      messages: [{ value: text }],
    });
    return { event: 'food', data: text };
  }

  @SubscribeMessage('sl')
  async handleShoppingListMessage(
    client: Socket,
    text: string,
  ): Promise<WsResponse<string>> {
    await this.producerService.produce({
      topic: 'sl',
      messages: [{ value: text }],
    });
    return { event: 'sl', data: text };
  }

  @SubscribeMessage('actions')
  async handleActionsMessage(
    client: Socket,
    text: string,
  ): Promise<WsResponse<string>> {
    // TODO: Как дергать сообщения из топика по запросу а не по подписке????
    if (text === 'getWorkouts') {
      const message = this.consumerService.getLatestWrMessage();
      this.sendToClient('workouts', message)
    } else if (text === 'getFood') {
      const message = this.consumerService.getLatestFdMessage();
      this.sendToClient('food', message)
    } else if (text === 'getShoppingList') {
      const message = this.consumerService.getLatestSlMessage();
      this.sendToClient('sl', message)
    }

    return { event: 'actions', data: text };
  }

  sendToClient(topic: string, message: string): void {
    this.server.emit(topic, { text: message });
  }
}
