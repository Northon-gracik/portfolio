import mongoose from "mongoose";
const { Schema, model } = mongoose


const productSchema = new Schema({
    name: String,
    price: Number,
    quantity: Number,
    stack: String,
    description: String,
    links: {
        type:[]
    },
    created_at:{ 
        type: Date, 
        default: Date.now
    },
});

const Product = model("Product", productSchema);

export { Product };
