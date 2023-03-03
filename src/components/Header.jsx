import React from 'react';
import { Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link to="/" className="navbar-brand" >
           Lab WikiCountries
          </Link>
          
        </div>
      </nav>
    </div>
  );
}

export default Header;
