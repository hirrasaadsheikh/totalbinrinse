import React from "react";
import Login from "../component/screen/Login";
import {Link} from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/all";
import "../component/screen/Landing.css";
import Navbar from "../component/screen/Navbar";
const SignIn = () => {
  return (
    <React.Fragment>
        <Navbar />
        <div className= "one">
      <div className="row">
        <div className="col-md-6 offset-md-3">
            <div style={{marginBottom: "5%", marginTop: "5%"}}>
                <Link style = {{color: "black", textDecoration: "none"}}
                      to="/">
                    <AiOutlineArrowLeft/>  Back to home
                </Link>
            </div>
          <Login />
        </div>
      </div>
        </div>
    </React.Fragment>
  );
};

export default SignIn;
