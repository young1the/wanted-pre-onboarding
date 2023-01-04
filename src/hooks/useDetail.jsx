import { useContext } from "react";
import { DetailStateContext, DispatchContext } from "../store/cardDetailContext"

export function useDetailState () {
    const state = useContext(DetailStateContext);
    if (!state) throw new Error();
    return state
}

export function useDetailDispatch () {
    const dp = useContext(DispatchContext);
    if (!dp) throw new Error();
    return dp
}