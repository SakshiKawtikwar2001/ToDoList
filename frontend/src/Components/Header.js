import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Logout from './Logout';

const Header = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">ToDoList</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {location.pathname === '/home' && (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Logout />
          </li>
        </ul>
      )}
    </div>
  </div>
</nav>

  );
};

export default Header;
