import { useNavigate } from 'react-router-dom';
import { List } from '../../components/List';
import { Card } from '../../components/Card';
import { useCountries } from './use-countries';

import { Country, CountryInfo } from 'types';

export const CountryList = () => {
  const navigate = useNavigate();
  const [status, error, countries] = useCountries();

  return (
    <>
      {error && <h2>{error}</h2>}
      {status === 'loading' && <h2>{'Wait ...'}</h2>}
      {status === 'received' && (
        <List>
          {countries.map((c: Country) => {
            const countryInfo: CountryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: c.region,
                },
                {
                  title: 'Capital',
                  description: c.capital,
                },
              ],
            };

            return <Card key={c.name} onClick={() => void navigate(`/country/${c.name}`)} {...countryInfo} />;
          })}
        </List>
      )}
    </>
  );
};
