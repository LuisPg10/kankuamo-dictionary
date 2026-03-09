import { useWord } from '../../../hooks/useWord';
import './WordCard.css';

export const WordCard = ({ word }) => {
  const { image, spanish, kankuamo, english, kankuamoSound } = word;
  const { kankuamoSoundRef, playKankuamoSound } = useWord(kankuamoSound);

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
          <button type="button" className="btn btn-language">
            {english}
          </button>
        </div>
      </div>

      <audio ref={kankuamoSoundRef} src={kankuamoSound}></audio>
    </article>
  );
};
