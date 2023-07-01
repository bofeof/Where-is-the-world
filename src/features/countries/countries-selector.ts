import { RootState } from 'store';
import { Country } from 'types';

export const selectCountriesInfo = (state: RootState) => ({
  status: state.countries.status,
  error: state.countries.error,
  countriesListLenght: state.countries.list.length,
});

export const selectAllCountries = (state: RootState) => state.countries.list;
export const selectVisibleCountries = (state: RootState, { search = '', region = '' }) => {
  return state.countries.list.filter(
    (c: Country) => c.name.toLowerCase().includes(search.toLowerCase()) && c.region.includes(region)
  );
};
