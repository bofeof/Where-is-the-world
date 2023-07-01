import { useSelector, useDispatch } from 'react-redux';
import { Theme, setTheme } from './theme-slice';
import { useEffect } from 'react';
import { themeSelector } from './theme-selector';

export const useTheme = (): [Theme, () => void] => {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return [theme, handleToggleTheme];
};
