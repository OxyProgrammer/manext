import { createContext } from 'react';
import { ThemeType } from './constants';
import { useState, useCallback } from 'react';

//context
export const AppContext = createContext({
  theme: ThemeType.light,
  toggleAppTheme: () => {},
});

//context provider
export const Provider = ({ children }) => {
  const [theme, setTheme] = useState(ThemeType.light);

  const toggleTheme = () => {
    const newTheme = theme === ThemeType.light ? ThemeType.dark : ThemeType.light;
    setTheme(newTheme);
  };
  const contextValue = {
    appTheme: theme,
    toggleAppTheme: useCallback(() => toggleTheme(), [theme]),
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
