import { numbersData } from '../data/numbers-data';
import { Card } from '../components/Card';

export const NumbersPage = () => {
  return (
    //* Numbers cards
    <>
      {numbersData.map((number) => (
        <Card key={number.spanish} word={number} />
      ))}
    </>
  );
};
