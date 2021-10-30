
import { transporter } from './index.js';

const send = {};

send.Default = async ( user ) => {
    const to = user.email;
    const subject = "Default";
    const text = "Default";
    const html = "<h1>Default</h1>"

    await SendMail(to, subject, text, html);
}


send.TICKET = async ( user, products, valueTotal, idOrder ) => {
    const to = user.email;
    const subject = "Ticket para pagamento do boleto";
    const text = "Caso não tenha sido enviado o boleto entre em contato conosco";
    const template = "Ticket"
    const context = {
        user,
        products,
        valueTotal,
        idOrder,
    }
    await SendMail(to, subject, text, template, context);
}

const SendMail = async (
    to,
    subject,
    text,
    template,
    context) => {
    let info = await transporter.sendMail({
        from: '"Northon Gracik 👻" <northongracik@gmail.com>', // sender address
        to,
        subject,
        text,
        template,
        context
    });

    console.log(info);
};

export { send }

