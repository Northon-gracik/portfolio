import { send } from '../mailer/mailer.js'

const mailerService = {};

mailerService.SendTicket = async (
    user, products, idOrder, type
) => {
    let valueTotal = 0;

    for (const product of products) {
        valueTotal += product.price * product.quantity;
    }

    const fun = send[type];

    if (fun) await fun(user, products, valueTotal, idOrder);
}


export { mailerService }