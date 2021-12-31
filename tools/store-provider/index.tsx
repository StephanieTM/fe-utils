import React, { createContext, useContext, useReducer } from 'react';

const defaultState = {
  counter: 0,
};

function reducer(state: typeof defaultState = defaultState, action: { type: string } = { type: '' }): typeof defaultState {
  switch (action.type) {
    case 'COUNTER_INC':
      return { ...state, counter: state.counter + 1 };
    case 'COUNTER_DEC':
      return { ...state, counter: state.counter - 1 };
    case 'COUNTER_RESET':
      return { ...state, counter: 0 };
    default:
      return state;
  }
}

export const StoreContext = createContext(null);

export function StoreProvider({ children }: { children: React.ReactChild }): JSX.Element {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = (): null => useContext(StoreContext);
