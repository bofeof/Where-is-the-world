import { RootState } from 'store';

export const selectSearch = (state: RootState) => state.controls.search;
export const selectRegion = (state: RootState) => state.controls.region;
