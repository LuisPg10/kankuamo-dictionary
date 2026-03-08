import { Card } from '../components/Card';

export const WordsPage = ({ words }) => {
  return (
    <>
      {words.map((word) => (
        <div key={word.spanish} className="col">
          <Card word={word} />
        </div>
      ))}
    </>
  );
};
