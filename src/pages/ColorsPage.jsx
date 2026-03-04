import { colorsData } from '../data/colors-data';
import { Card } from '../components/Card';

export const ColorsPage = () => {
  return (
    //* Colors cards
    <>
      {colorsData.map((color) => (
        <Card key={color.spanish} word={color} />
      ))}
    </>
  );
};
