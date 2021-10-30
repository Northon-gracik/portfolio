import { Order } from "../models/Order.js"

class OrderRepository {
    findAll(){
        return Order.find();
    }

    findById(id){
        return Order.findById(id);
    }

    findByUser(idUser){
        return Order.find({idUser});
    }
    
    create(order){
        return Order.create(order);
    }

    update(id, orderUpdate){
        return Order.findByIdAndUpdate(id, orderUpdate, { new: true });
    }

    delete(id){
        return Order.findByIdAndDelete(id);
    }
};

export { OrderRepository };