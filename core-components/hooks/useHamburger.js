import { useContext } from 'react';
import { AppContext } from 'core-components/app';

function useHamburger() {
  const { hamburger, showHamburger } = useContext(AppContext);
  
  const showHamburgerToUser = (value) => {
    showHamburger(value);
  };

  return { hamburgerVisible: hamburger, showHamburger: showHamburgerToUser };
}

export default useHamburger;
