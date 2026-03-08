import { useRef } from 'react';
import { useSearch } from '../../../hooks/useSearch';
import { NavBar } from '../NavBar';
import './Header.css';

export const Header = () => {
  const inputRef = useRef(null);
  const { query, handleSearch } = useSearch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const word = inputRef.current.value.trim();

    handleSearch(word.toLowerCase());
  };

  const handleChange = () => {
    if (!inputRef.current.value.trim()) handleSearch('');
  };

  return (
    <header className="position-sticky top-0 z-1">
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <img
            className="logo"
            src="/assets/images/logo.png"
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
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                className="form-control me-2"
                type="search"
                placeholder="Buscar palabras"
                aria-label="Search"
                data-bs-theme="light"
                defaultValue={query}
                onChange={handleChange}
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
