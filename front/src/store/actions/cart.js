function toggleCart(product) {
    return {
        type: "TOGGLE_CART",
        product
    }
}

function cleanCart() {
    return {
        type: "CLEAN_CART",
    }
}

export { 
    toggleCart,
    cleanCart
}