
import { mailerService } from './service/MailerService.js'
import { consumer } from './kafka/index.js'

async function run() {

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      // console.log(topic);
      const payload = JSON.parse(message.value);

      // console.log("payload", payload);

      const { payment, order, products, user } = payload;

      const idOrder = order._id;
      const { type } = payment;

      mailerService.SendTicket(user, products, idOrder, type);
    },
  });
}

run().catch(err => console.log(err));

// const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
// console.log(`- ${prefix} ${message.key}#${message.value}`)
// const payload = JSON.parse(message.value);


// setTimeout(() => {
//   producer.send({
//     topic: 'certification-response',
//     messages: [
//       { value: `Certificado do usuário ${payload.user.name} do curso ${payload.course} gerado!` }
//     ]
//   })
// }, 3000);