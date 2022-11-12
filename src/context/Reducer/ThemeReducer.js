import { TOGGLE_THEME } from "../ActionTypes";


export const ThemeReducer = (state, action) => {
    console.log(action.type, action.payload);
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state;
    }
}