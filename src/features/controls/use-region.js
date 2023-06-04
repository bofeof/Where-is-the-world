import { useDispatch, useSelector } from 'react-redux';
import { selectRegion, setRegion } from "./controls-slice";

export const useRegion = () => {
  const dispatch = useDispatch();
  const region = useSelector(selectRegion);

  const handleSelectRegion = (reg) => {
    // example  Africa: { value: 'Africa', label: 'Africa' },
    dispatch(setRegion(reg?.value || ''));
  };

  return {handleSelectRegion, region}
}
