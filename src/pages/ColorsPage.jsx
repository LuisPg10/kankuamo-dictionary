import { colorsData } from '../data/colors-data';
import { Card } from '../components/Card';

export const ColorsPage = () => {
  return (
    //* Colors cards
    <>
      {colorsData.map((color) => (
        <div key={color.spanish} className="col">
          <Card word={color} />
        </div>
      ))}
    </>
  );
};
