import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Region } from 'types';

type ControlsSlice = {
  search: string,
  region: Region | '',
};

const initState: ControlsSlice = {
  search: '',
  region: '',
};

const controlsSlice = createSlice({
  name: '@@controls',
  initialState: initState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setRegion: (state, action: PayloadAction<Region | ''>) => {
      state.region = action.payload;
    },
    clearControls: () => {
      return initState;
    },
  },
});

export const { setRegion, setSearch, clearControls } = controlsSlice.actions;

export const controlsReducer = controlsSlice.reducer;