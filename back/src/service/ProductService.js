import { ProductRepository } from "../repository/ProductRepository.js";

const productRepository = new ProductRepository();

class ProductService {
    async createProduct(product) {
        if (!product.name) throw new Error("Product Name is Undefined");
        const productAlreadyExists = await productRepository.findByName(product.name);
        if (!productAlreadyExists) {
            const productCreated = await productRepository.create(product);

            return productCreated;
        }
        throw new Error("Product already exists");
    }

    async findAll() {
        console.log("--SERVICE--");
        const allProducts = await productRepository.findAll();
        return allProducts;
    }

    async updatedProduct(id, product) {
        const productAlreadyExists = await productRepository.findById(id);

        if (productAlreadyExists) {
            const productUpdated = await productRepository.update(id, product);
            return productUpdated;
        }

        throw new Error("Product not exists");
    }

    async findById(id) {
        const product = await productRepository.findById(id);
        if (product) {
            return product;
        }
        throw new Error("Product not found");
    }

    async updateQuantity(id, quantity) {
        let product = await this.findById(id);
        product.quantity = product.quantity - quantity;

        if (product.quantity > 0) {
            const productUpdated = await this.updatedProduct(product.id, product);
            return productUpdated;
        } else {
            throw new Error("Quantity invalid");
        }
    }

    async restock(id, quantity) {
        let product = await this.findById(id);
        product.quantity = product.quantity + quantity;
        const productUpdated = await this.updatedProduct(product.id, product);
        return productUpdated;
    }

}

export { ProductService }