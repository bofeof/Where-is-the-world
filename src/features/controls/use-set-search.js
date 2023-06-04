import { useDispatch, useSelector } from 'react-redux';
import { selectSearch, setSearch } from './controls-slice';

export const useSetSearch = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  const handleSetSearch = (evt) => {
    dispatch(setSearch(evt.target.value));
  };

  return { handleSetSearch, search };
};
