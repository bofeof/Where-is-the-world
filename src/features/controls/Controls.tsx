import styled from 'styled-components';

import { Search } from './Search';
import { CustomSelect } from './CustomSelect';

import { useRegion } from './use-region';
import { Region } from 'types';

// Record<Region, {value: Region, label: Region}>
type RegionOption = {
  [RegionKey in Region]: { value: RegionKey; label: RegionKey };
};

const optionsMap: RegionOption = {
  Africa: { value: 'Africa', label: 'Africa' },
  America: { value: 'America', label: 'America' },
  Asia: { value: 'Asia', label: 'Asia' },
  Europe: { value: 'Europe', label: 'Europe' },
  Oceania: { value: 'Oceania', label: 'Oceania' },
};
const options = Object.values(optionsMap);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = () => {
  const [handleSelectRegion, region] = useRegion();
  return (
    <Wrapper>
      <Search />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region ? optionsMap[region] : ''}
        onChange={handleSelectRegion}
      />
    </Wrapper>
  );
};
