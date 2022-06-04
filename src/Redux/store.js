import { legacy_createStore as createstore } from "redux";
import { reducer } from "./reducer";


export const store = createstore(reducer);

store.subscribe(() => {
    console.log("Subscribe", store.getState());
});