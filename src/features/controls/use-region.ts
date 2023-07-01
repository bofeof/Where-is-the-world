import { setRegion } from './controls-slice';
import { selectRegion } from './controls-selectors';
import { useAppDispatch, useAppSelector } from 'redux-hooks';
import { CountryOption } from './CustomSelect';
import { Region } from 'types';
import { SingleValue } from 'react-select';

type onSelect = (reg: SingleValue<CountryOption>) => void;

export const useRegion = (): [onSelect, Region | ''] => {
  const dispatch = useAppDispatch();
  const region = useAppSelector(selectRegion);

  const handleSelectRegion: onSelect = (reg) => {
    // example  Africa: { value: 'Africa', label: 'Africa' },

    if (reg) {
      dispatch(setRegion(reg.value));
    } else {
      dispatch(setRegion(''));
    }
  };

  return [ handleSelectRegion, region ];
};
