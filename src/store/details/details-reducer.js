import { SET_COUNTRY, SET_ERROR, SET_LOADING, CLEAR_DETAILS, SET_NEIGHBORS } from './details-actions';

const initState = {
  status: 'idle',
  error: null,
  currentCountry: null,
  neighbors: [],
};

export const detailsRegionReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_COUNTRY: {
      return {
        ...state,
        status: 'received',
        error: null,
        currentCountry: action.payload,
      };
    }

    case SET_LOADING: {
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    }

    case SET_ERROR: {
      return {
        ...state,
        status: 'rejected',
        error: action.payload,
      };
    }

    case CLEAR_DETAILS: {
      return {
        ...initState,
      };
    }

    case SET_NEIGHBORS: {
      return {
        ...state,
        neighbors: action.payload,
      };
    }

    default:
      return state;
  }
};
