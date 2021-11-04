import Kafka from 'kafkajs';

const clientId = 'api';
const brokers = ['portfolio_kafka_1:9092'];

const groupId = 'portifolio-group-receiver';

const kafka = new Kafka.Kafka({ clientId, brokers });

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId });
(async () => {
    await producer.connect();
    await consumer.connect();
})();

export { producer, consumer };
