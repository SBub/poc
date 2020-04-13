import React, { createContext, useReducer, useContext } from "react";

import reducer, { initialState } from "./reducer";

const AuthDispatch = createContext();
const AuthState = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthDispatch.Provider value={dispatch}>
      <AuthState.Provider value={state} children={children} />
    </AuthDispatch.Provider>
  );
};

const useAuthDispatch = () => {
  return useContext(AuthDispatch);
};

const useAuthState = () => {
  return useContext(AuthState);
};

export { useAuthDispatch, useAuthState, AuthProvider as default };
