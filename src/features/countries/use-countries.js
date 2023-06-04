import { useDispatch, useSelector } from 'react-redux';
import { selectRegion, selectSearch } from '../controls/controls-slice';
import { loadCountries, selectCountriesInfo, selectVisibleCountries } from './countries-slice';
import { useEffect } from 'react';

export const useCountries = () => {
  const dispatch = useDispatch();

  const search = useSelector(selectSearch);
  const region = useSelector(selectRegion);

  const countries = useSelector((state) => selectVisibleCountries(state, { search, region }));
  const { status, error, countriesListLenght } = useSelector(selectCountriesInfo);

  useEffect(() => {
    dispatch(loadCountries());
  }, [countriesListLenght, dispatch]);

  return { status, error, countries };
};
