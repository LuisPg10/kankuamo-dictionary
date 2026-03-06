import { numbersData } from '../data/numbers-data';
import { Card } from '../components/Card';

export const NumbersPage = () => {
  return (
    //* Numbers cards
    <>
      {numbersData.map((number) => (
        <div key={number.spanish} className="col">
          <Card word={number} />
        </div>
      ))}
    </>
  );
};
