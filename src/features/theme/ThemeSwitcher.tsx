import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useTheme } from './use-theme.js';

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

export const ThemeSwitcher = () => {
  const [ theme, handleToggleTheme ] = useTheme();
  return (
    <ModeSwitcher onClick={handleToggleTheme}>
      {theme === 'light' ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" />}{' '}
      <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
    </ModeSwitcher>
  );
};
