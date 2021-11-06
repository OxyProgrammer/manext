import createCache from '@emotion/cache';
import { createGenerateClassName } from '@mui/styles';

export const createEmotionCache = () => {
  return createCache({ key: 'css' });
};

export const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});
