import './Card.css';

export const Card = ({ word }) => {
  const { image, spanish, kankuamo, english } = word;
  return (
    <div className="card">
      {/* Imagen de Administrador */}
      <img src={image} className="card-img-top" alt={spanish} />

      <div className="card-body">
        {/* Nombre de la caja*/}
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="card-title">{spanish}</h5>
        </div>

        {/* Botones Idioma*/}
        <div className="d-grid gap-2 mt-2">
          <button type="button" className="btn btn-language">
            {kankuamo}
          </button>
          <button type="button" className="btn btn-language">
            {english}
          </button>
        </div>
      </div>
    </div>
  );
};
