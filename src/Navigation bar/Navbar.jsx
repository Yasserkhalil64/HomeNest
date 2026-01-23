import React from 'react'
import { Link } from "react-router-dom";
import logo2 from "../logo2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo2} alt="logo" className='logo2' />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/residences">Residences</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/testimonials">Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
          <FontAwesomeIcon icon={faCartShopping} className='shopping'  data-bs-toggle="offcanvas" href="#offcanvasExample"  />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
