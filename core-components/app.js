import { useReducer, createContext } from 'react';
import { ActionNames, ThemeType, MessageType } from './constants';
import produce from 'immer';

const initialState = {
  theme: ThemeType.light,
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case ActionNames.toggleTheme: {
      const nextState = produce(state, (draftState) => {
        draftState.theme =
          state.theme === ThemeType.light ? ThemeType.dark : ThemeType.light;
      });
      return nextState;
    }

    default:
      return state;
  }
};

//context
export const AppContext = createContext();

//context provider
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
  );
};
