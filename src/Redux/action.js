//Action type
export const CART_LENGTH = "CART_LENGTH";

export const isAuth= "isAuth";
// export const FILTER_MEALS_DEAL = "FILTER_MEALS_DEAL";


//action
export const CartLength = (data) => ({
    type: CART_LENGTH,
    payload : data,
})

export const setisAuth = (data) => ({
    type: isAuth,
    payload : data,
})

