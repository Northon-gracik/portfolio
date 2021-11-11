
import Router from "next/router";

import Product from "../src/services/product";
import Header from "../src/components/Header"
import { createOrder } from "../src/services/apiPost";


import { connect } from "react-redux"
import { bindActionCreators } from "redux";

import * as CartAction from "../src/store/actions/cart";
import { AuthContext } from "../src/components/authContext/index.jsx";
import { useContext } from "react";

function Cart(
    { cleanCart }
) {


    const { user } = useContext(AuthContext);

    const product = Product();
    const priceTotal = product.map(product =>
        product.price * product.quantity
    ).reduce((total, price) => total + price, 0);


    const formValues = () => {
        if (!user) {
            Router.push("/login");
        } else {
            const orderItens = product.map(data => { return { idProduct: data._id, quantity: data.quantity } })
            const order = {
                orderItens,
            }
            createOrder(order);
            cleanCart();
            Router.push("/dashboard");
        }
    }


    return (
        <div>
            <Header />
            <div className="wrapper-cart">
                <div className="body-cart">
                    <div className="algo">
                        <div className="product-name">
                            <p>Nome do produto</p>
                        </div>
                        <div className="cart-product">
                            <p>Preço</p>
                            <p>Quantidade</p>
                        </div>

                    </div>
                    {product.map(product =>
                        <div className="card-cart" key={product._id}>
                            <div className="product-name">
                                <p>{product.name}</p>
                            </div>
                            <div className="cart-product">
                                <p>{product.price}</p>
                                <p>{product.quantity}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="checkout">
                    <p>Produtos: {product.length}</p>
                    <h3>Total: {priceTotal}</h3>
                    <br />

                    <button onClick={formValues}>Confirmar</button>
                    <button onClick={() => cleanCart()}>Limpar Carrinho</button>
                </div>
            </div>
        </div>
    )
}

// const mapStateToProps = state => ({
//     cart: state.cart.products,
// });

// const mapDispatchToProps = dispatch => bindActionCreators(CartAction, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Cart);

export default Cart