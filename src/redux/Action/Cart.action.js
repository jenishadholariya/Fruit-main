import * as ActionTypes from '../ActionTypes'


export const addtoCart = (data) => (dispatch) => {
    console.log("addtoCart", { id: data, quantity: 1 });
    dispatch({ type: ActionTypes.ADD_TO_CART, payload: { id: data, quantity: 1 } })
}

export const cartDelete = (data) => (dispatch) => {
    console.log(data);
    dispatch({ type: ActionTypes.DELETE_CART, payload: data })
}

export const cartDecrement = (data) => (dispatch) => {
    console.log("cartDecrement", data);
    dispatch({ type: ActionTypes.CART_DECREMENT, payload: data })
}

export const cartIncrement = (data) => (dispatch) => {
    console.log("cartDecrement", data);
    dispatch({ type: ActionTypes.CART_INCREMENT, payload: data })
}

export const cartEmpty = ()=> (dispatch) => {
    dispatch({type: ActionTypes.CART_EMPTY})
}