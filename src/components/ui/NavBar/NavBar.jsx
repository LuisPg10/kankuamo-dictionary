import { NavLink, useSearchParams } from 'react-router';
import { menuOptions } from './menu/menu-options';
import './NavBar.css';

export const NavBar = () => {
  const [searchParams] = useSearchParams();

  return (
    <ul className="navbar-nav ms-auto me-3">
      {menuOptions.map((option) => (
        <li key={option.path} className="nav-item">
          <NavLink
            className="nav-link text-light"
            to={{
              pathname: option.path,
              search: searchParams.toString(),
            }}
          >
            {option.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
