import React, { useReducer } from "react";
import { AuthReducer, initialState } from './Reducer'; 

const StateContext = React.createContext();
const StateDispatchContext = React.createContext();

export function useTheState() {
  const context = React.useContext(StateContext);
  if (context === undefined) {
    throw new Error("usetheState must be used within a StateProvider");
  }
 
  return context;
}
 
export function useStateDispatch() {
  const context = React.useContext(StateDispatchContext);
  if (context === undefined) {
    throw new Error("useStateDispatch must be used within a StateProvider");
  }
 
  return context;
}

export const StateProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);
 
  return (
    <StateContext.Provider value={user}>
      <StateDispatchContext.Provider value={dispatch}>
        {children}
      </StateDispatchContext.Provider>
    </StateContext.Provider>
  );
};