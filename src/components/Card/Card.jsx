import "./Card.css";

export default function Card({ data, spanish, english, kankuamo }) {
  return (
    <div className="card">
      {/* Imagen de Administrador */}
      <img src={data} className="card-img-top" alt={spanish} />

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
}
