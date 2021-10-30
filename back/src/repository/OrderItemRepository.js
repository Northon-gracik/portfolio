import { OrderItem } from "../models/OrderItem.js"

class OrderItemRepository {
    findAll(){
        return OrderItem.find();
    }

    findById(id){
        return OrderItem.findById(id);
    }

    findByOrder(idOrder){
        return OrderItem.find({idOrder});
    }
    
    create(orderItem){
        return OrderItem.create(orderItem);
    }

    update(id, orderUpdate){
        return OrderItem.findByIdAndUpdate(id, orderUpdate, { new: true });
    }

    delete(id){
        return OrderItem.findByIdAndDelete(id);
    }
};

export { OrderItemRepository };