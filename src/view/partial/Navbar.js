import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {

    const [burgerMenuActive, setBurgerMenuActive] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(false);

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">Home
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                </Link>

                <a role="button" className={`navbar-burger ${burgerMenuActive ? "is-active" : ""}`} onClick={() => { setBurgerMenuActive(!burgerMenuActive); }} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarContent" className={`navbar-menu ${burgerMenuActive ? "is-active" : ""}`}>
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">
                        Home
                    </Link>

                    <Link to="/doc" className="navbar-item">
                        Documentation
                    </Link>

                    <div className={`navbar-item has-dropdown ${activeDropdown ? "is-active" : ""}`} onClick={() => { setActiveDropdown(!activeDropdown); }}>
                        <a className="navbar-link">
                            More
                        </a>

                        <div className="navbar-dropdown">
                            <Link to="/about" className="navbar-item">
                                About
                            </Link>
                            <Link to="/hireMe" className="navbar-item">
                                Hire me
                            </Link>
                            <Link to="/contact" className="navbar-item">
                                Contact
                            </Link>
                            <hr className="navbar-divider" />
                            <Link to="/issue" className="navbar-item">
                                Report an issue
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;