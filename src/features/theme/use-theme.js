import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from './theme-slice';
import { useEffect } from 'react';

export const useTheme = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme, handleToggleTheme };
};
