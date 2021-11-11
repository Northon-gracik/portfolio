
import { orderService } from "../service/OrderService.js";

class OrderController {
    async createOrder(req, res) {
        try {
            const { order } = req.body
            const orderCreated = await orderService.createOrder(order, req.userId);
            // console.log(orderCreated);
            res.status(200).json(orderCreated);
        }catch (err){
            res.status(400).json({ "error": err.message });
        }
    }

    async closeOrder(req, res){
        try {
            // const { producer } = req;
            const { id, payment } = req.body;
            const service = await orderService.closeOrder(id, payment, 
                // producer
                );
            res.status(200).json(service);
        }catch (err){
            res.status(400).json({ "error": err.message });
        }
    }

    async payment(req, res){
        try {
            const { id } = req.params;
            const service = await orderService.payment(id);
            res.status(200).json(service);
        }catch (err){
            res.status(400).json({ "error": err.message });
        }
    }

    async findByUser(req, res){
        try {
            const id = req.userId;
            const service = await orderService.findByUser(id);
            res.status(200).json(service);
        }catch (err){
            res.status(400).json({ "error": err.message });
        }
    }

    async getOrdersLength(req, res){
        try {
            const service = await orderService.getOrdersData();
            res.status(200).json(service);
        }catch (err){
            res.status(400).json({ "error": err.message });
        }
    }

};

export { OrderController }