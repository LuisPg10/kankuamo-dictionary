import { animalsData } from '../data/animals-data';
import { Card } from '../components/Card';

export const AnimalsPage = () => {
  return (
    //* Animals cards
    <>
      {animalsData.map((animal) => (
        <Card key={animal.spanish} word={animal} />
      ))}
    </>
  );
};
