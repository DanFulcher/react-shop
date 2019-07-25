export const addToCart = (id) => {
    return {
        type: addToCart,
        id
    }
}

export const addQuantity = (id) => {
    return {
        type: addQuantity,
        id
    }
}

export const subQuantity = (id) => {
    return {
        type: subQuantity,
        id
    }
}

export const remove = (id) => {
    return {
        type: remove,
        id
    }
}

export const addShipping = (e) => {
    return {
        type: addShipping,
        e
    }
}

export const subShipping = (e) => {
    return {
        type: subShipping,
        e
    }
}