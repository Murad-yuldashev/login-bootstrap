import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../helpers/Persistence-storage";
import { logoutUser } from "../../redux/Auth";

const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(logoutUser())
    removeItem('token');
    navigate('/login');
  }

  return (
    <section className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="" style={{ width: "80px" }} />
      </Link>
      <nav className="mt-2 d-inline-flex mt-md-0 ms-md-auto">
        {loggedIn ? (
          <>
            <Link to="/login" className="me-3 py-2 text-dark text-decoration-none fs-4" href="#">
              {user.username}
            </Link>
            <button onClick={logout} className="btn btn-outline-danger m-0">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="me-3 py-2 text-dark text-decoration-none fs-4" href="#">
              Login
            </Link>
            <Link to="/register" className="me-3 py-2 text-dark text-decoration-none fs-4" href="#">
              Register
            </Link>
          </>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
