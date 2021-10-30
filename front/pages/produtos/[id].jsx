import Header from "../../src/components/Header"

import { bindActionCreators } from "redux";
import { connect } from "react-redux"
import * as CartAction from "../../src/store/actions/cart";

import { getProduct } from "../../src/services/apiGet";

function Products({ toggleCart, cart, product }) {


    return (
        <div>
            <Header />
            <div>
                <h1>{product.name}</h1>
                <p>{product.stack}</p>
                <h2>{product.description}</h2>
                <a href={`${product.linkNode}`}>Link Node</a>
                <br />
                <button onClick={() => toggleCart(product)}>Colocar no carrinho</button>
            </div>
        </div>

    )
}

export async function getServerSideProps(req, res) {
    const { id } = req.query;
    const product = await getProduct(id);
    console.log(product);
    return {
        props: { product },
    }

}

const mapStateToProps = state => ({
    cart: state.cart.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);