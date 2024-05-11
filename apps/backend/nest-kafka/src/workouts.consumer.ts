import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from './kafka/consumer.service';

@Injectable()
export class WorkoutsConsumer implements OnModuleInit {
  private logger: Logger = new Logger('WorkoutsConsumer');
  constructor(
    private readonly consumerService: ConsumerService,
  ) {}
  async onModuleInit() {
    await this.consumerService.consume(
      { topics: ['workouts', 'food', 'sl'] },
      {
        eachMessage: async ({ topic, message }) => {
          if (topic === 'workouts') {
            this.consumerService.saveWorkoutsMessage(message.value?.toString());
          } else if (topic === 'food') {
            this.consumerService.saveFoodMessage(message.value?.toString());
          } else if (topic === 'sl') {
            this.consumerService.saveSlMessage(message.value?.toString());
          }
        },
      }
    );
  }
}
