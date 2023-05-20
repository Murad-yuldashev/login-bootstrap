import React from "react";
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between">
            <Link to='/' className="navbar-brand">
                <img src={logo} alt="" style={{width: "80px"}} />
            </Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to='/login' className="nav-link fs-3" href="#">Login</Link>
                    <Link to='/register' className="nav-link fs-3" href="#">Register</Link>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
