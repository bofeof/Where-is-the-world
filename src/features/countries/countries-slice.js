import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { responseStatuses } from '../responseStatuses';

const initState = {
  status: 'idle',
  error: null,
  list: [],
};

export const loadCountries = createAsyncThunk('@@countries/loadСountries',
(_, { extra: { client, api } }) => {
  return client.get(api.ALL_COUNTRIES);
});

const countrySlice = createSlice({
  name: '@@countries',
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state, action) => {
        state.status = responseStatuses.loading;
        state.error = null;
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.status = responseStatuses.error;
        state.error = action.payload || action.error.message;
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.status = responseStatuses.done;
        state.error = null;
        state.list = action.payload.data;
      });
  },
});

export const countryReducer = countrySlice.reducer;

// for filtering
export const selectCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  countriesListLenght: state.countries.list.length,
});

export const selectAllCountries = (state) => state.countries.list;
export const selectVisibleCountries = (state, { search = '', region = '' }) => {
  return state.countries.list.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) && c.region.includes(region)
  );
};
