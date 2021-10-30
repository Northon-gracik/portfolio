import { useSelector } from "react-redux";

const Product = () => {
    const cart = useSelector(state => state.cart.products) || [];

    const productString = arrStringify(cart);

    const productStringNoReplay = filterReplay(productString);

    const product = quantityByReplay( arrParse(productStringNoReplay), productString );

    return product;
}

const arrStringify = (arr) => arr.map(data => JSON.stringify(data));

const arrParse = (arr) => arr.map(data => JSON.parse(data));

const filterReplay = (arr) => arr.filter((data, i) =>
    arr.indexOf(data) === i
);

const quantityByReplay = (arr, arrComplete) => arr.map(data => {
    let quantity = arrComplete.filter(dataFil => dataFil === JSON.stringify( data )).length;
    return {
        ...data,
        quantity
    };
});

export default Product;