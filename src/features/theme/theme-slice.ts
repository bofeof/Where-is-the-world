import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Theme = 'light' | 'dark'

const themeSlice = createSlice({
  name: '@@theme',
  initialState: 'light' as Theme,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme> ) => {
      return action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer  = themeSlice.reducer;
