import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">useContext</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink activeClassName={"active"} className="nav-link" aria-current="page" to={"/"}>
                            Home
                        </NavLink>
                        <NavLink activeClassName={"active"} className="nav-link" to={"/login"}>
                            Login
                        </NavLink>
                        <NavLink activeClassName={"active"} className="nav-link" to={"/about"}>
                            About
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;