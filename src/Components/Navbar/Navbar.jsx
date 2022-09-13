import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import search from "../../assets/magnifying-glass-solid.svg";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import "../Navbar/Navbar.css";
export const Navbar = () => {
  var user = null;

  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo"  />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>

        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>

        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>

        <form>
          <input type="text" placeholder="Search..." />
          <img src={search} alt="search" width="18" className="search-icon" />
        </form>
        {user === null ? (
          <Link to="/auth" className="nav-item nav-links">
            Log In
          </Link>
        ) : (
          <>
            <Link to="/">
              <Avatar>M</Avatar>
            </Link>
            <Button>Log out</Button>
          </>
        )}
      </div>
    </nav>
  );
};
