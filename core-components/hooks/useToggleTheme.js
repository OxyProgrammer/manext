import { useContext } from 'react';
import { AppContext } from 'core-components/app';

function useToggleTheme() {
  const { appTheme, toggleAppTheme } = useContext(AppContext);
  return { theme: appTheme, toggleTheme:toggleAppTheme };
}

export default useToggleTheme;
