import { useAppDispatch, useAppSelector } from 'redux-hooks';
import { loadNeighborsByBorder } from './details-slice';
import { useEffect } from 'react';
import { selectNeighbors } from './details-selectors';

export const useNeighbors = (borders: string[] = []) => {
  const dispatch = useAppDispatch();
  const neighbors = useAppSelector(selectNeighbors);

  useEffect(() => {
    borders.length > 0 && dispatch(loadNeighborsByBorder(borders));
  }, [borders, dispatch]);

  return neighbors;
};
