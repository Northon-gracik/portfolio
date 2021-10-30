import mongoose from "mongoose";

import { User } from "./User.js"

const { Schema, model } = mongoose;

const orderSchema = new Schema({
    idUser: { 
        type: Schema.Types.ObjectId,
        ref: User,
        required: true,
    },
    paymentType: String,
    statusPayment: String,
    valueTotal: Number,
    created_at:{ 
        type: Date, 
        default: Date.now
    },
});

const Order = model("Order", orderSchema);

export { Order };