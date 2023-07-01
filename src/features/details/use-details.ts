import { useEffect } from 'react';
import { clearDetails, loadCountryByName } from './details-slice';
import { selectDetails } from './details-selectors';
import { useAppDispatch, useAppSelector } from 'redux-hooks';

export const useDetails = (name: string) => {
  const dispatch = useAppDispatch();
  const { currentCountry, error, status } = useAppSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));

    // unmount
    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);

  return { currentCountry, error, status };
};
