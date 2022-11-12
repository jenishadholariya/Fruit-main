import { createContext, useReducer } from "react";
import { TOGGLE_THEME } from "./ActionTypes";
import { ThemeReducer } from "./Reducer/ThemeReducer";

export const themeContext = createContext()

const initVal = {
    theme: 'light'
}

const ToggleContext = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, initVal);


    const toggleTheme = (val) => {
        const newTheme = val === 'light' ? 'dark' : 'light'
        dispatch({ type: TOGGLE_THEME, payload: newTheme })
    }

    return (
        <themeContext.Provider
            value={{
                ...state,
                toggleTheme
            }}
        >
            {children}
        </themeContext.Provider>
    )
}
export default ToggleContext;