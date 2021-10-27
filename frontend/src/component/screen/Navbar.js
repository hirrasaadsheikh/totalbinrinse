import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {TiShoppingCart} from "react-icons/all";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <img src= "./logo.png" alt = "logo" style={{width: "210px", height:"220px", paddingTop:"40px"}}/>
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About Us
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact Us
                            </NavLink>
                        </li>

                        <li className="nav-item">
                        <NavLink to='/cart'>
                            <div className= "icon1">
                                <TiShoppingCart/>
                            </div>
                        </NavLink>
                        </li>

                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
