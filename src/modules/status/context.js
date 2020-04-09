import React, { createContext, useReducer, useContext } from "react";

import reducer, { initialState } from "./reducer";

const StatusStateContext = createContext();
const StatusDispatchContext = createContext();

const StatusProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StatusDispatchContext.Provider value={dispatch}>
      <StatusStateContext.Provider value={state} children={children} />
    </StatusDispatchContext.Provider>
  );
};

const useStatus = () => {
  return useContext(StatusStateContext);
};

const useStatusDispatch = () => {
  return useContext(StatusDispatchContext);
};

export { useStatus, useStatusDispatch, StatusProvider as default };
