import express from "express"

import { UserController } from "./controller/UserController.js";
import { ProductController } from "./controller/ProductController.js";
import { OrderController } from "./controller/OrderController.js";
import { OrderItemController } from "./controller/OrderItemController.js";

import { auth } from "./middlewares/auth.js";
import { isAdmin } from "./middlewares/isAdmin.js";

const router = express.Router();

const userController  = new UserController();
const productController  = new ProductController();
const orderController = new OrderController();
const orderItemController = new OrderItemController();

router.get('/', (req, res) => res.json({ 'message': 'HelloWord'}))

router.post("/register", userController.register); //registro de usuario

router.post("/authenticate", userController.authenticate); //autenticacao de usuario com senha e login

router.get("/findAllProduct", productController.findAll); //buscar todos os produtos

router.get("/findProductById/:id", productController.findProductById); //buscar produto com id

router.post("/findByOrder", orderItemController.findByOrder); // buscar os itens de pedido pelo id do pedido

router.get("/payment/:id", orderController.payment); // processamento falso do boleto

router.use(auth); // middleware para controle de autenticacao

router.get("/findByToken", userController.findByToken); //retornar o usuario autenticado
 
router.post("/registerAddress", userController.registerAddress); //registrar endereco de usuario

router.post("/createOrder", orderController.createOrder); //criar pedido

router.post("/closeOrder", orderController.closeOrder); //fechar pedido

router.get("/findOrderByToken", orderController.findByUser); //buscar os pedidos do usuario

router.get("/findItensByOrder", orderItemController.findByOrder); //buscar os pedidos do usuario

router.use(isAdmin); //saber se o usuario e adiministrador

router.post("/createProduct", productController.createProduct); //criar product

router.post("/restockProduct", productController.restock); //reabastecer produto

router.get("/getOrdersData", orderController.getOrdersLength);

router.get("/a",( req, res ) => res.json({"ok": true}));

export { router } 
