import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuth, signout } from "../../action/authAction";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavItem,
  Nav,
  NavLink,
} from "reactstrap";
import {TiShoppingCart} from "react-icons/all";
import "./Navbar.css";
import { withRouter } from "react-router-dom";

const Header = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar color="#2c3e4c" light expand="md" style={{height: "130px", justifyContent: "flex-end"}}>
        <NavbarToggler style = {{ marginLeft: "5%" , color: "white", border: "2%", borderColor: "white"}} onClick={toggle} />
        <Collapse style={{background: "#2c3e4c", justifyContent: "flex-end"}} isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {!isAuth() && (
              <React.Fragment>
                <NavItem>
                  <Link style = {{textDecoration: "none"}} to="/">
                    <NavLink style={{
                        cursor: "pointer" ,
                        background: "#2c3e4c" ,
                        color: "white"}}
                    >Home
                    </NavLink>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link
                      to = "/cart"
                      className= "icon1">
                    <TiShoppingCart/>
                  </Link>
                </NavItem>

              </React.Fragment>
            )}

            {isAuth() && isAuth().isAdmin === false && (
              <NavItem>
                <Link style = {{textDecoration: 'none' }}  to="/user">
                  <NavLink style={{
                      cursor: "pointer",
                      color: "white",
                      background: "#2c3e4c"}}>
                    {`Welcome, ${isAuth().name}`}</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && isAuth().isAdmin === true && (
              <NavItem>
                <Link style = {{textDecoration: "none"}} to="/admin">
                  <NavLink style={{
                      cursor: "pointer" ,
                      color: "white",
                      background: "#2c3e4c"}}>
                    {`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && (
              <NavItem>
                <NavLink
                  style={{
                      cursor: "pointer",
                      color: "white",
                      background: "#00a1fe",
                      width: "100px",
                      textAlign: "center"}}
                  onClick={() => signout(() => history.push("/login"))}>
                  Logout
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
  );
};

export default withRouter(Header);
