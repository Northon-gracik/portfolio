import Router from "next/router";
import { useContext, useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux"
import * as OrderAction from "../../store/actions/order";

import { getProduct } from "../../services/apiGet.js";
import { getOrderItensByOrder } from "../../services/apiPost.js";

let i = 0;

const ListOrder = props => {
    const { id, changeOrder, status } = props;
    const [itens, setItens] = useState([]);

    get(getProductsByOrder, id, setItens);

    const changeFormClose = () => {
        changeOrder(id);
        Router.push("/FormClose")
    }

    return (
        <div>
            {
                itens.map(item => item.name)
            }
            <br />
            {
                status === "Pending"
                ?
                <button onClick={changeFormClose}>Clique aqui para finalizar</button>
                :
                <div></div>
            }
        </div>
    )
};

const get = (get, params, set) => useEffect(async () => set(await get(params)), []);

const getProductsByOrder = async id => {
    const itens = await getOrderItensByOrder(id);

    let products = [];

    for (const item of itens) {
        const product = await getProduct(item.idProduct);
        console.log(item.quantity * product.price);

        products.push(product);
    }

    return products;
}

const mapStateToProps = state => ({
    order: state.order.orderId,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrderAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListOrder);