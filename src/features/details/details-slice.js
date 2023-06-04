import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { responseStatuses } from '../responseStatuses';

const initState = {
  currentCountry: null,
  neighbors: [],
  status: 'idle',
  error: null,
};

export const loadCountryByName = createAsyncThunk('@@details/loadCountryByName', (name, { extra: { client, api } }) => {
  return client.get(api.searchByCountry(name));
});

export const loadNeighborsByBorder = createAsyncThunk(
  '@@details/lloadNeighborsByBorder',
  async (borders, { extra: { client, api } }) => {
    return client.get(api.filterByCode(borders));
  }
);

const detailsSlice = createSlice({
  name: '@@details',
  initialState: initState,
  reducers: {
    clearDetails: (state, action) => {
      return initState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.pending, (state, action) => {
        state.status = responseStatuses.loading;
        state.error = null;
      })
      .addCase(loadCountryByName.rejected, (state, action) => {
        state.status = responseStatuses.error;
        state.error = action.payload || action.error.message;
      })
      .addCase(loadCountryByName.fulfilled, (state, action) => {
        state.currentCountry = action.payload.data[0]; //response from server looks like {0: {}}
        state.error = null;
        state.status = responseStatuses.done;
      })
      // loadNeighborsByBorder
      .addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
        state.neighbors = action.payload.data.map((country) => country.name);
      });
  },
});

export const { clearDetails } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;

// selectors
export const selectCurrentCountry = (state) => state.details.currentCountry;
export const selectDetails = (state) => state.details;
export const selectNeighbors = (state) => state.details.neighbors;
