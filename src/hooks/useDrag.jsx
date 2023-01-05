import { useContext } from "react";
import { DragContext } from "../store/DragContext";

export default function useDrag () {
    const state = useContext(DragContext);
    return state;
}