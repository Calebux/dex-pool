/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const QueryContext = createContext();

const initialState = {
  chain_name: null,
  dex_name: null,
  pool_address: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "submit":
      return {
        ...state,
        chain_name: action.payload.chain_name,
        dex_name: action.payload.dex_name,
        pool_address: action.payload.pool_address,
      };
    default:
      throw new Error("Action Unknown");
  }
}

const QueryProvider = ({ children }) => {
  const [{ chain_name, dex_name, pool_address }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  return (
    <QueryContext.Provider
      value={{
        chain_name,
        dex_name,
        pool_address,
        dispatch,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};

function useQuery() {
  const context = useContext(QueryContext);
  if (context === undefined)
    throw new Error("Context was read outside the provider scope");

  return context;
}

export { QueryProvider, useQuery };
