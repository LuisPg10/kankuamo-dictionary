import { NavLink } from 'react-router';
import { menuOptions } from './menu/menu-options';
import './NavBar.css';

export const NavBar = () => {
  return (
    <ul className="navbar-nav ms-auto me-3">
      {menuOptions.map((option) => (
        <li key={option.path} className="nav-item">
          <NavLink className="nav-link text-light" to={option.path}>
            {option.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
