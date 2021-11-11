import Kafka from 'kafkajs';

import { OrderRepository } from "../repository/OrderRepository.js";
import { UserRepository } from "../repository/UserRepository.js";
import { OrderItemService } from "../service/OrderItemService.js"
import { ProductService } from './ProductService.js';
import { UserService } from './UserService.js';

const orderRepository = new OrderRepository();
const userRepository = new UserRepository();
const orderItemService = new OrderItemService();
const userService = new UserService();
const productService = new ProductService();

const orderService = {};

orderService.createOrder = async (orderParam, idUser) => {
    const { order, orderItens} = await formatOrder({ idUser, ...orderParam, statusPayment: "Pending" });
    const orderCreated = await orderRepository.create(order);
    const orderItensCreated = await createOrderItens(orderItens, orderCreated.id);
    return { orderCreated, orderItensCreated };
}

orderService.updatedOrder = async (id, order) => {
    let orderAlreadyExists = await orderRepository.findById(id);

    if (orderAlreadyExists) {
        const orderUpdated = await orderRepository.update(id, order);
        return orderUpdated;
    }

    throw new Error("Order not exists");
}

orderService.findByThisUser = async (id) => { 
    const order = await orderRepository.findByUser(id);

    return order;
}

orderService.findByUser = async (id) => {
    const user = await userRepository.findById(id);
    if (user) {
        const order = await orderService.findByThisUser(id);

        return order;
    }
    throw new Error("User not exists");
}

orderService.addOrderItem = (id, orderItem) => {
    let orderAlreadyExists = /*await*/ orderRepository.findById(id);
    if (orderAlreadyExists) {
        orderAlreadyExists.orderItem = [...orderAlreadyExists.orderItem, ...orderItem];

        const orderUpadated = /*await*/ orderService.updatedOrder(id, orderAlreadyExists);

        return orderUpadated;
    }
    throw new Error("Order not exists")
}

orderService.closeOrder = async (id, payment, 
    // producer
    ) => {
    const order = await orderRepository.findById(id);
    if(!order) throw new Error("Order not found");
    if(order.statusPayment !== "Pending") throw new Error("Order status not pending");
    order.statusPayment = "Processing";
    const orderUpdate = await orderService.updatedOrder(id, order);
    const user = await userService.findById(order.idUser);
    const orderItens = await orderItemService.findByOrder(order.id);
    const products = await getProductByOrder(orderItens);
    // sendTicket(producer, JSON.stringify({ payment, order, products, user }))
    return orderUpdate;
}

orderService.payment = async (id) => {
    const order = await orderRepository.findById(id);
    if (!order) throw new Error(`Order ${id} not found`);
    order.statusPayment = "Accepted";
    order.paymentType = "Ticket"
    const orderUpdate = await orderService.updatedOrder(id, order);
    return orderUpdate;
}

orderService.getOrdersData = async () => {
    const allOrders = await orderRepository.findAll();
    const filter = status => allOrders.filter(order => order.statusPayment === status);
    const pending = filter("Pending");
    const processing = filter("Processing");
    const accepted = filter("Accepted");
    return { length: allOrders.length, pending, processing, accepted };
}

const createOrderItens = async (orderItens, idOrder) => {
    const orderItensCreated = [];

    for (const itens of orderItens) {
        const itemCreated = await orderItemService.createOrderItem(itens, idOrder);
        orderItensCreated.push(itemCreated);
    }

    return orderItensCreated;
}

const getValueTotal = async orderItens =>{
    let valueTotal = 0;
    
    for (const itens of orderItens) {
        const { price } = await productService.findById(itens.idProduct);
        valueTotal += price * itens.quantity
    }
    
    return valueTotal;
}

const formatOrder = async order => {
    const orderItens = order.orderItens;
    order.orderItens = undefined;
    order.valueTotal = await getValueTotal(orderItens);
    return { order, orderItens };
}

const getProductByOrder = async (orderItens) => {
    let itens = [];
   
    for (const item of orderItens) {
        const { idProduct, quantity } = item;
        const { name, price, } = await productService.findById(idProduct);
        itens.push({ name, price, quantity });
    }

    return itens;
}

const sendTicket = async ( producer, value ) => {
    producer.send({
        topic: 'ticket-payment',
        compression: Kafka.CompressionTypes.GZIP,
        messages: [
            { value },
        ]
    });
}

export { orderService }