import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Country, Extra, Status } from 'types';

type DetailsSlice = {
  currentCountry: Country | null;
  neighbors: string[];
  status: Status;
  error: string | null;
};

const initState: DetailsSlice = {
  currentCountry: null,
  neighbors: [],
  status: 'idle',
  error: null,
};

export const loadCountryByName = createAsyncThunk<
  { data: Country[] },
  string,
  {
    extra: Extra;
    rejectValue: string;
  }
>('@@details/loadCountryByName', async (name, { extra: { client, api }, rejectWithValue }) => {
  try {
    return client.get(api.searchByCountry(name));
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Unknown error');
  }
});

export const loadNeighborsByBorder = createAsyncThunk<{data: Country[]}, string[], { extra: Extra; rejectValue: string }>(
  '@@details/lloadNeighborsByBorder',
  async (borders, { extra: { client, api }, rejectWithValue }) => {
    try {
      return client.get(api.filterByCode(borders));
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Unknown error')
    }
  }
);

const detailsSlice = createSlice({
  name: '@@details',
  initialState: initState,
  reducers: {
    clearDetails: () => {
      return initState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCountryByName.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Cant load data about error';
      })
      .addCase(loadCountryByName.fulfilled, (state, action) => {
        state.currentCountry = action.payload.data[0]; //response from server looks like {0: {}}
        state.error = null;
        state.status = 'received';
      })

      // loadNeighborsByBorder
      .addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
        state.neighbors = action.payload.data.map((country) => country.name);
      });
  },
});

export const { clearDetails } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;


