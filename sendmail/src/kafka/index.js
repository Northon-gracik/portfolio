import Kafka from 'kafkajs';

const clientId = 'sendMail';
const brokers = ['portfolio_kafka_1:9092'];

const topic = 'ticket-payment';
const groupId = 'portifolio-group-receiver';

const kafka = new Kafka.Kafka({ clientId, brokers });

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId });

(async () => {
    await producer.connect();
    await consumer.connect();
})();

consumer.subscribe({ topic });

export { producer, consumer };
