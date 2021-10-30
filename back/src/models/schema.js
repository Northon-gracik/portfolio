import mongoose from "mongoose";
const { Schema, model } = mongoose


const messageSchema = new Schema({
    message: String,
    created_at:{ 
        type: Date, 
        default: Date.now
    },
});

const Message = model("Message", messageSchema)

export { Message };
