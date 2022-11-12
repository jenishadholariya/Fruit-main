import * as ActionTypes from '../ActionTypes'

const initVal = {
    cart: [],
    countCart: 0
}

export const cartReducer = (state = initVal, action) => {
    console.log(action.type, action.payload);
    switch (action.type) {

        case ActionTypes.ADD_TO_CART:
            if (state.countCart == 0) {
                let cartInitval = {
                    id: action.payload.id,
                    quantity: 1
                }
            } else {
                let check = false;
                state.cart.map((c, i) => {
                    if (c.id === action.payload.id) {
                        state.cart[i].quantity++;
                        check = true;
                    }
                })
                if (!check) {
                    let cartValue = {
                        id: action.payload.id,
                        quantity: 1
                    }
                    state.cart.push(cartValue)
                }
            }
            return {
                ...state,
                // cart: state.cart.concat(action.payload),
            }
        case ActionTypes.DELETE_CART:
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload)
            }
        case ActionTypes.CART_DECREMENT:
            state.countCart--
            return {
                ...state,
                cart: state.cart.map((c) => {
                    if (c.id === action.payload) {
                        return {
                            id: c.id,
                            quantity: c.quantity - 1
                        }
                    } else {
                        return c;
                    }
                }).filter((c) => c.quantity !== 0)
            }

        case ActionTypes.CART_INCREMENT:
            state.countCart++
            return {
                ...state,
                cart: state.cart.map((c) => {
                    if (c.id === action.payload) {
                        return {
                            id: c.id,
                            quantity: c.quantity + 1
                        }
                    } else {
                        return c;
                    }
                }).filter((c) => c.quantity !== 0)
            }
        case ActionTypes.CART_EMPTY:

            return {
                ...state,
                cart: []
            }

        default:
            return state;
    }
}