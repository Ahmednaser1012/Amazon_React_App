import { createContext, useContext, useReducer } from "react";
import { AppReducer, initialState } from "./AppReducer";

// Create Context
const GlobalContext = createContext();

// Provider
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        dispatch: dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;

// custom Hook functions for Context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
