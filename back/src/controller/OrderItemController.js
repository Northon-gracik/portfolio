
import { OrderItemService } from "../service/OrderItemService.js";

const orderItemService = new OrderItemService();

class OrderItemController {
    async findByOrder(req, res) {
        try {
            const { orderId } = req.body;
            const orderItens = await orderItemService.findByOrder(orderId);
            res.json(orderItens);
        }catch(err) {
            res.status(400).json({ "error": err.message });
        }
    }
};

export { OrderItemController }