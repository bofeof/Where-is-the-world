import { setSearch } from './controls-slice';
import { selectSearch } from './controls-selectors';

import { useAppDispatch, useAppSelector } from 'redux-hooks';

type onSearch = React.ChangeEventHandler<HTMLInputElement>;

export const useSetSearch = (): [onSearch, string] => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearch);

  const handleSetSearch: onSearch = (evt) => {
    dispatch(setSearch(evt.target.value));
  };

  return [handleSetSearch, search];
};
