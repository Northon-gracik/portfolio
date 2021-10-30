const INITIAL_STATE = {
    orderId: ''
};


export default function reducerOrder(state = INITIAL_STATE, action) {

    if (action.type === "CHANGE_ORDER") {
        return {
            ...state,
            orderId: action.order
        }
    }

    if (action.type === "CLEAN_ORDER") {
        return {
            ...state,
            orderId: ''
        }
    }

    return state;
}