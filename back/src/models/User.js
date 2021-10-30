import mongoose from "mongoose";
const { Schema, model } = mongoose

import bcrypt from "bcryptjs";


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    authorization: {
        type: String,
        required: true,
        default: 'USER',
        select: false
    },
    address: {
        type: [], //FAZER OUTRO MODEL PARA ENDERECOS
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre("save", async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

const User = model("User", userSchema)

export { User };