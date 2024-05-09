import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import {
  Consumer,
  ConsumerRunConfig,
  ConsumerSubscribeTopics,
  Kafka,
} from 'kafkajs';

@Injectable()
export class ConsumerService implements OnApplicationShutdown {
  private wrmessages = [];
  private fdmessages = [];
  private readonly kafka = new Kafka({
    brokers: ['localhost:9092'],
  });

  private readonly consumers: Consumer[] = [];

  async consume(topic: ConsumerSubscribeTopics, config: ConsumerRunConfig) {
    const consumer = this.kafka.consumer({ groupId: 'workouts' });

    await consumer.connect();
    await consumer.subscribe(topic);

    await consumer.run(config);

    this.consumers.push(consumer);
  }

  async onApplicationShutdown() {
    await Promise.all(this.consumers.map((consumer) => consumer.disconnect()));
  }

  saveWorkoutsMessage(message: string): void {
    this.wrmessages.push(message);
  }

  saveFoodMessage(message: string): void {
    this.fdmessages.push(message);
  }

  getLatestWrMessage(): string {
    return this.wrmessages[this.wrmessages?.length-1];
  }

  getLatestFdMessage(): string {
    return this.fdmessages[this.fdmessages?.length-1];
  }
}
