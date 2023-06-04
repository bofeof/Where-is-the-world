import { useDispatch } from 'react-redux';
import { clearControls } from './controls-slice';

export const useClean = () => {
  const dispatch = useDispatch();

  const handleCleanUp = () => {
    dispatch(clearControls());
  };

  return handleCleanUp;
};
