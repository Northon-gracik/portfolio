import { Message } from "../models/schema.js"

class MessageRepository {

    getAll(){
        return Message.find();
    }

    getById(id){
        return Message.findById(id);
    }

    create(message){
        return Message.create(message);
    }

    update(id, messageUpdate){
        const updatedMessage = {
            message: messageUpdate
        }

        return Message.findByIdAndUpdate(id, updatedMessage, { new: true });
    }

    delete(id){
        return Message.findByIdAndDelete(id);
    }
}


export { MessageRepository }