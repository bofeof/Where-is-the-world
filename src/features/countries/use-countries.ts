import { selectRegion, selectSearch } from 'features/controls/controls-selectors';
import { selectCountriesInfo, selectVisibleCountries } from './countries-selector';
import { useEffect } from 'react';
import { RootState } from 'store';
import { loadCountries } from './countries-slice';
import { useAppDispatch, useAppSelector } from 'redux-hooks';
import { Country, Status } from 'types';

export const useCountries = (): [Status, string | null, Country[]] => {
  const dispatch = useAppDispatch();

  const search = useAppSelector(selectSearch);
  const region = useAppSelector(selectRegion);

  const countries = useAppSelector((state: RootState) => selectVisibleCountries(state, { search, region }));
  const { status, error, countriesListLenght } = useAppSelector(selectCountriesInfo);

  useEffect(() => {
    dispatch(loadCountries());
  }, [countriesListLenght, dispatch]);

  return [status, error, countries ];
};
