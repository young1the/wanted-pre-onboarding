import { createContext, useRef } from "react";

const INITIAL_STATE = {
  // {id:ele.id, status: ele.status}
  startRef: null,
  enterRef: null,
};

export const DragContext = createContext(INITIAL_STATE);

export const DragContextProvider = ({ children }) => {
  const startRef = useRef({});
  const enterRef = useRef({});

  return (
    <DragContext.Provider value={{ startRef, enterRef }}>
      {children}
    </DragContext.Provider>
  );
};
