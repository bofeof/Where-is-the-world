import { Info } from './Info';
import { useDetails } from './use-details';
import { responseStatuses } from '../responseStatuses';

export const CountryDetails = ({name = '', navigate}) => {
  const { currentCountry, error, status } = useDetails(name);
  return (
    <>
      {status === responseStatuses.loading && <h2>{responseStatuses.loading}</h2>}
      {error && <h2>{`${responseStatuses.error}, ${error}`}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  );
};
