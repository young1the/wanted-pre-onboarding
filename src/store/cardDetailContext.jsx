import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    popup: false,
    id: "",
}

export const DetailStateContext = createContext(INITIAL_STATE);
export const DispatchContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
        case "ON": {
            return ({popup: true, id: action.payload});
        }
        case "OFF": {
            return ({popup: false, id: ""});
        }
        default:
            return state;
    }
}

export const DetailContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <DetailStateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </DetailStateContext.Provider>
    )
}
