import { Link } from 'react-router';
import { menuOptions } from './menu/menu-options';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {menuOptions.map((option) => (
          <li key={option.path}>
            <Link className="animate-text nav-link active" to={option.path}>
              {option.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
