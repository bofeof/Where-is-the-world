import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from './countries-actions';

const initState = {
  status: 'idle', //loading/received/reject
  error: null,
  list: [], //list of countries
};

export const countriesReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        status: 'loading',
        erorr: null
      }
    }
    case SET_ERROR: {
      return {
        ...state,
        status: 'rejected',
        error: action.payload
      }
    }
    case SET_COUNTRIES: {
      return {
        ...state,
        status: 'received',
        error: null,
        list: action.payload,
      }
    }
    default:
      return state;
  }
};
