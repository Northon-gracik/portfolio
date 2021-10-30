import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  brokers: ['localhost:9092'],
  clientId: 'sendMail',
})

const topic = 'ticket-payment';
const groupId = 'portifolio-group-receiver';

const consumer = kafka.consumer({ groupId })

const producer = kafka.producer();

await consumer.connect();

await consumer.subscribe({ topic });

export { producer, consumer };