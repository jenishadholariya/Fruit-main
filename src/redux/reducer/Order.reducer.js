
import * as ActionTypes from "../ActionTypes"

const initVal = {
    order: []
}

export const orderReducer = (state = initVal, action) => {
    console.log(action.payload, action.type);
    switch (action.type) {
        
        case ActionTypes.GET_ORDER_DATA:
            return {
                ...state,
                order: action.payload
            }
            case ActionTypes.ADD_ORDER_DATA:
                return {
                    ...state,
                    order: state.order.concat(action.payload),
                }
        default:
            return state
    }
}