import logo from '../../assets/images/logo.png';
import { NavBar } from '../NavBar';
import './Header.css';

export const Header = () => {
  return (
    <header className="position-sticky top-0 z-1">
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <img
            className="logo"
            src={logo}
            alt="kankuamo dictionary"
            width={80}
            height={80}
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Mostrar/Ocultar navegación"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <NavBar />
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar palabras"
                aria-label="Search"
                data-bs-theme="light"
              />
              <button className="btn btn-outline-light" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};
