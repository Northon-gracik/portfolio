import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092'],
    logLevel: logLevel.WARN,
    retry: {
        initialRetryTime: 300,
        retries: 10
    },
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'portifolio-group-receiver' });

await producer.connect();
await consumer.connect();

export { producer, consumer };