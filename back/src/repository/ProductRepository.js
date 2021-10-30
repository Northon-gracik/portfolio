import { Product } from "../models/Product.js"

class ProductRepository {

    findAll(){
        return Product.find();
    }

    findById(id){
        return Product.findById(id);
    }

    findByName(name) {
        return Product.findOne({name: name});
    }
    
    create(product){
        return Product.create(product);
    }

    update(id, productUpdate){
        return Product.findByIdAndUpdate(id, productUpdate, { new: true });
    }

    delete(id){
        return Product.findByIdAndDelete(id);
    }
}


export { ProductRepository }