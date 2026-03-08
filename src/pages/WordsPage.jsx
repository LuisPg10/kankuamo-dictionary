import { WordCard } from '../components/WordCard';

export const WordsPage = ({ words }) => {
  return (
    <>
      {words.map((word) => (
        <div key={word.spanish} className="col">
          <WordCard word={word} />
        </div>
      ))}
    </>
  );
};
