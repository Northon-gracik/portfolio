import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import 'dotenv/config';

import { UserRepository } from "../repository/UserRepository.js";

const userRepository = new UserRepository();

function generateToken(id) {
    return jwt.sign({ id }, process.env.SECRET_KEY, {
        expiresIn: 60 * 60 * 1000,
    });
}

class UserService {
    async register(user) {
        const userAlreadyExist = await userRepository.findByEmail(user.email)

        if (!userAlreadyExist) {
            const userCreated = await userRepository.createUser(user)

            userCreated.password = undefined;

            const token = generateToken(user.id);

            return {
                userCreated,
                token
            };
        }
        throw new Error("User already exists");
    }
    async authenticate(email, password) {
        const user = await userRepository.findByEmailAndPassword(email);

        if (!user) {
            throw new Error("User not found");
        }
        
        if (!await bcrypt.compare(password, user.password)) {
            throw new Error("Invalid password");
        }
        
        user.password = undefined;
        
        const token = generateToken(user.id);
        
        console.log(user, token);
        return {
            user,
            token
        };
    }

    async findById(id) {
        const user = await userRepository.findById(id);
        return user;
    }
    
    async findByIdAndAuthorization(id) {
        const user = await userRepository.findByIdAndAuthorization(id);
        return user;
    }

    async registerAddress(id, address){
        let user = await userRepository.findById(id);
        if(!user){
            throw new Error("User not found");
        }
        const [ rua, num, br ] = address.split(", ");
        user.address = [...user.address, {rua, num, br}];
        const userUpdated = await userRepository.update(id, user);
        return userUpdated;
    }
    
}

export { UserService }