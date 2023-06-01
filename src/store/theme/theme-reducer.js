import { SET_THEME } from './theme-actions';

export const themeReducer = (state = 'light', action) => {
  switch (action.type) {
    case SET_THEME: {
      // return new theme
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
