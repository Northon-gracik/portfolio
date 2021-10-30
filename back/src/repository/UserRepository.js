import { User } from "../models/User.js"

class UserRepository{

    createUser(user){
        return User.create(user)
    }

    findByEmail(email){
        return User.findOne({ email });
    }

    findByEmailAndPassword(email){
        return User.findOne({ email }).select("+password");
    }

    findByIdAndAuthorization(id){ 
        return User.findById(id).select("+authorization");
    }

    findById(id){
        return User.findById(id);
    }

    update(id, userUpdate){
        return User.findByIdAndUpdate(id, userUpdate, { new: true });
    }
}

export { UserRepository }