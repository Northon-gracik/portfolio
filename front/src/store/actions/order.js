function changeOrder(order) {
    return {
        type: "CHANGE_ORDER",
        order
    }
}

function cleanOrder() {
    return {
        type: "CLEAN_ORDER",
    }
}

export { 
    changeOrder,
    cleanOrder
}