import { SET_SEARCH, SET_REGION, CLEAR_CONTROLS } from './controls-actions';

const initState = {
  search: '',
  region: '',
};

export const controlsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }
    case SET_REGION: {
      return {
        ...state,
        region: action.payload,
      };
    }
    case CLEAR_CONTROLS: {
      return {
        ...state,
        ...initState
      }
    }
    default:
      return state;
  }
};
