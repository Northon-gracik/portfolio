import { useRouter } from "next/router";

import { bindActionCreators } from "redux";
import { connect } from "react-redux"
import * as CartAction from "../../src/store/actions/cart";

import { getProduct } from "../../src/services/apiGet";

import ActiveLink from "../../src/components/ActiveLink";
import Header from "../../src/components/Header"
import { useEffect, useState } from "react";

function Products(
    { toggleCart, cart }
    ) {

    const { query } = useRouter();
    const { id } = query;

    const [ product, setProduct ] = useState({});
    
    useEffect(() => {
        if(id)
            getProduct(id).then( data => setProduct(data));
    }, [id])

    return (
        <div>
            <Header />
            <div>
                <h1>{product.name}</h1>
                <p>{product.stack}</p>
                <h2>{product.description}</h2>
                <ActiveLink href={`${product.link}`}>Link</ActiveLink>
                <br />
                <button onClick={() => toggleCart(product)}>Colocar no carrinho</button>
            </div>
        </div>

    )
}

// export async function getServerSideProps(req, res) {
// const { id } = req.query;
// const product = await getProduct(id);
// console.log(product);
// return {
//     props: { product },
// }

// }

const mapStateToProps = state => ({
    cart: state.cart.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
