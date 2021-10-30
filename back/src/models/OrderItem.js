import mongoose from "mongoose";

import { Product } from "./Product.js"
import { Order } from "./Order.js"

const { Schema, model } = mongoose


const orderItemSchema = new Schema({
    quantity: Number,
    idOrder: {
        type: Schema.Types.ObjectId,
        ref: Order
    },
    idProduct: {
        type: Schema.Types.ObjectId,
        ref: Product
    },
    created_at:{ 
        type: Date, 
        default: Date.now
    },
});

const OrderItem = model("OrderItem", orderItemSchema)

export { OrderItem };
