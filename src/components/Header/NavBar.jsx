import "./NavBar.css";

export default function NavBar() {
  return (
    <nav class="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className=" animate-text nav-link active" href="#">
            Inicio
          </a>
        </li>
        <li>
          <a className=" animate-text nav-link active" href="#">
            Animales
          </a>
        </li>
        <li>
          <a className=" animate-text nav-link active" href="#">
            Colores
          </a>
        </li>
        <li>
          <a className=" animate-text nav-link active" href="#">
            Numeros
          </a>
        </li>
        <li>
          <a className=" animate-text nav-link active" href="#">
            Partes del Cuerpo
          </a>
        </li>
      </ul>
    </nav>
  );
}
