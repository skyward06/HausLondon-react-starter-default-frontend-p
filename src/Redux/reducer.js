import { CART_LENGTH } from "./action";
import { isAuth } from "./action";

const init = { cart_length : 0, is_Auth: false };

export const reducer = (store=init, { type, payload }) => {
    switch (type) {
        case CART_LENGTH:
            return { ...store, cart_length: payload };
        
        case isAuth:
            return { ...store, is_Auth : payload};
        
        default:
        return store;
    }
};