
import { OrderItemRepository } from "../repository/OrderItemRepository.js";
import { ProductRepository } from "../repository/ProductRepository.js"
import { ProductService } from "./ProductService.js";

const orderItemRepository = new OrderItemRepository();
const productRepository = new ProductRepository();
const productService = new ProductService();

class OrderItemService{
    async createOrderItem(orderItem, idOrder){
        try {
            orderItem = {idOrder, ...orderItem};
            const product = await productService.updateQuantity(orderItem.idProduct, orderItem.quantity);
            
            const orderItemCreated = await orderItemRepository.create(orderItem);
            
            return {orderItemCreated, product};
        } catch (err) {
            throw new Error(err);
        }
        
    }

    async findByOrder(idOrder){
        const orderItensByOrder = await orderItemRepository.findByOrder(idOrder);
        return orderItensByOrder;
    }
};

export { OrderItemService }
