import * as ActionTypes from '../ActionTypes'
const initval = {
    isLoading: false,
    user: null,
    error: ''
}

export const authReducer = (state = initval, action) => {
    console.log(action.type, action.payload);
    switch (action.type) {
        case ActionTypes.SIGNEDIN_USER:
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
                error: ''
            }
            case ActionTypes.SIGNEDOUT_USER:
            return {
                ...state,
                isLoading: false,
                user: null,
                error: ''
            }
        default:
            return state;
    }
}