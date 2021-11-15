import { useContext } from 'react';
import { AppContext } from 'core-components/app';
import { ThemeType, ActionNames } from 'core-components/constants';

function useToggleTheme() {
  const { state, dispatch } = useContext(AppContext);
  const toggleTheme = () => {
    dispatch({
      type: ActionNames.toggleTheme,
    });
  };

  return { theme: state ? state.theme : null, toggleTheme };
}

export default useToggleTheme;
