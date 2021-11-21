import { createContext } from 'react';
import { ThemeType } from './constants';
import { useState, useCallback } from 'react';

//context
export const AppContext = createContext({
  theme: ThemeType.light,
  toggleAppTheme: () => {},
  hamburger: false,
  showHamburger: (value) => {},
});

//context provider
export const Provider = ({ children }) => {
  const [theme, setTheme] = useState(ThemeType.light);
  const [showHamburger, setShowHamburger] = useState(false);
  const toggleTheme = () => {
    const newTheme = theme === ThemeType.light ? ThemeType.dark : ThemeType.light;
    setTheme(newTheme);
  };

  const contextValue = {
    appTheme: theme,
    hamburger: showHamburger,
    toggleAppTheme: useCallback(() => toggleTheme(), [theme]),
    showHamburger: useCallback((value) => setShowHamburger(value), [showHamburger]),
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
