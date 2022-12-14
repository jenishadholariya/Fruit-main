import * as ActionTypes from '../ActionTypes'

const initval = {
    text: '',
    color: ''
}

export const alertReducer = (state = initval, action) => {
    switch (action.type) {
        case ActionTypes.SET_ALERT:
            return {
                ...state,
                text: action.payload.text,
                color: action.payload.color
            }

        case ActionTypes.RESET_ALERT:
            return {
                ...state,
                text: '',
                color: ''
            }
        default:
            return state
    }
}