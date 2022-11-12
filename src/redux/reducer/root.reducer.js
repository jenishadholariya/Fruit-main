import { combineReducers } from "redux";
import { alertReducer } from "./Alert.reducer";
import { authReducer } from "./auth.reducer";
import { cartReducer } from "./Cart.reducer";
import { categoryReducer } from "./Category.reducer";
import { counterReducer } from "./Counter_Reducer";
import { orderReducer } from "./Order.reducer";
import { productReducer } from "./ProductGet.reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    counter: counterReducer,
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    order : orderReducer
})