export default function AdminCard({ User, Name }) {
  return (
    <div className="card">
      {/* Imagen de Administrador */}
      <img src={User} className="card-img-top" alt={Name} />

      <div className="card-body">
        {/* Nombre de Administrador con Botón de Info Al Lado*/}
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="card-title">{Name}</h5>
          <span className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-outline-primary" type="button">
              Info
            </button>
          </span>
        </div>

        {/* Botones Eliminar y Actualizar*/}
        <div className="d-grid gap-2 mt-2">
          <button type="button" className="btn btn-outline-success">
            Actualizar
          </button>
          <button type="button" className="btn btn-outline-danger">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
