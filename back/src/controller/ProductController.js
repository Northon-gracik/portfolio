import { ProductService } from "../service/ProductService.js"

const productService = new ProductService();

class ProductController{    
    async createProduct(req, res){
        try{
            const { product } = req.body;
            const productCreated = await productService.createProduct(product);
            res.status(200).json(productCreated);
        }catch(err){
            res.status(400).json({ "error": err.message });
        }
    }

    async findAll(req, res) {
        try {
            const allProducts = await productService.findAll();
            res.status(200).json(allProducts);
        }catch (err) {
            res.status(400).json({ "error": err.message });
        }
    }

    async findProductById(req, res){
        try{
            const { id } = req.params;
            const product = await productService.findById(id);
            res.status(200).json(product);
        }catch(err){
            res.status(400).json({ "error": err.message });
        }
    }

    async restock(req, res){
        try{
            const { productId, quantity } = req.body;
            const product = await productService.restock(productId, quantity);
            res.status(200).json(product);
        }catch(err){
            res.status(400).json({ "error": err.message });
        }
    }

};

export { ProductController }

