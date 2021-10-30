const INITIAL_STATE = {
    products: []
};


export default function reducerCart(state = INITIAL_STATE, action) {

    if (action.type === "TOGGLE_CART") {
        return {
            ...state,
            products: [
                ...state.products,
                action.product
            ]
        }
    }

    if (action.type === "CLEAN_CART") {
        return {
            ...state,
            products: []
        }
    }

    return state;
}