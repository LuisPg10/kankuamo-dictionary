import { useWord } from '../../../hooks/useWord';
import './WordCard.css';

export const WordCard = ({ word }) => {
  const { image, spanish, kankuamo, english } = word;
  const { kankuamoSound, englishSound } = word;

  const { playKankuamoSound, playEnglishSound } = useWord(
    kankuamoSound,
    englishSound,
  );

  return (
    <article className="card">
      {/* image */}
      <img src={image} className="card-img-top" alt={spanish} />

      <div className="card-body">
        {/* name */}
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="card-title">{spanish}</h5>
        </div>

        {/* buttons */}
        <div className="d-grid gap-2 mt-2">
          <button
            type="button"
            className="btn btn-language"
            onClick={playKankuamoSound}
          >
            {kankuamo}
          </button>

          <button
            type="button"
            className="btn btn-language"
            onClick={playEnglishSound}
          >
            {english}
          </button>
        </div>
      </div>
    </article>
  );
};
