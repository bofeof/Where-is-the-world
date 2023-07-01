import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Country, Extra, Status } from 'types';

type CountrySlice = {
  status: Status;
  error: string | null;
  list: Country[];
};

const initState: CountrySlice = {
  status: 'idle',
  error: null,
  list: [],
};

export const loadCountries = createAsyncThunk<
  { data: Country[] },
  undefined,
  {
    state: { countries: CountrySlice };
    extra: Extra;
    rejectValue: string;
  }
>(
  '@@countries/loadСountries',
  async (_, { extra: { client, api }, rejectWithValue }) => {
    try {
      return client.get(api.ALL_COUNTRIES);
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Unknown error');
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        countries: { status },
      } = getState();
      if (status === 'loading') {
        return false;
      }
    },
  }
);

const countrySlice = createSlice({
  name: '@@countries',
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Cant load data about error';
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.status = 'received';
        state.error = null;
        state.list = action.payload.data;
      });
  },
});

export const countryReducer = countrySlice.reducer;
