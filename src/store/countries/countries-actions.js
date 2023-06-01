export const SET_COUNTRIES = '@@countries/SET_COUNTRIES';
export const SET_LOADING = '@@countries/SET_LOADING';
export const SET_ERROR = '@@countries/SET_ERROR';

export const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

// client = axios
export const loadCountries = () => (dispatch, _, { client, api }) => {
    dispatch(setLoading);

    client
      .get(api.ALL_COUNTRIES)
      .then(
        // axios: response.data
        ({ data }) => dispatch(setCountries(data))
      )
      .catch((error) => setError(error));
  };
