import { clearControls } from './controls-slice';
import { useAppDispatch } from 'redux-hooks';

export const useClean = () => {
  const dispatch = useAppDispatch();

  const handleCleanUp = () => {
    dispatch(clearControls());
  };

  return handleCleanUp;
};
