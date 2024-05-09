import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from './kafka/consumer.service';
import { WebsocketGateway } from './gateway/gateway';

@Injectable()
export class WorkoutsConsumer implements OnModuleInit {
  constructor(
    private readonly consumerService: ConsumerService,
    private readonly websocketGateway: WebsocketGateway,
  ) {}
  async onModuleInit() {
    await this.consumerService.consume(
      { topics: ['workouts'] },
      {
        eachMessage: async ({ topic, partition, message }) => {
          // if (message.value?.toString() === 'started') {
            this.websocketGateway.sendToClient(topic, message?.value?.toString())
          // }
        }
      },
    );
  }
}
