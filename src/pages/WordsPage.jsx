import { includesWordsHelper } from '../helpers/includes-words.helper';
import { useSearch } from '../hooks/useSearch';
import { SadIcon } from '../components/icons/SadIcon';
import { WordCard } from '../components/ui/WordCard';

export const WordsPage = ({ words = [] }) => {
  const { query } = useSearch();

  const currentWords = includesWordsHelper(words, query);

  return currentWords.length === 0 ? (
    <div className="d-flex flex-column align-items-center gap-2 text-center text-wrap fw-semibold position-absolute top-50 start-50 translate-middle">
      <SadIcon />
      No hay palabras que coincidan con la busqueda
    </div>
  ) : (
    <>
      {currentWords.map((word) => (
        <div key={word.spanish} className="col">
          <WordCard word={word} />
        </div>
      ))}
    </>
  );
};
