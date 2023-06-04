import { createSlice } from '@reduxjs/toolkit';

const initState = {
  search: '',
  region: '',
};

const controlsSlice = createSlice({
  name: '@@controls',
  initialState: initState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    clearControls: (state, action) => {
      return initState;
    },
  },
});

export const { setRegion, setSearch, clearControls } = controlsSlice.actions;

export const controlsReducer = controlsSlice.reducer;

export const selectSearch = (state) => state.controls.search;
export const selectRegion = (state) => state.controls.region;
