import { animalsData } from '../data/animals-data';
import { Card } from '../components/Card';

export const AnimalsPage = () => {
  return (
    //* Animals cards
    <>
      {animalsData.map((animal) => (
        <div key={animal.spanish} className="col">
          <Card word={animal} />
        </div>
      ))}
    </>
  );
};
