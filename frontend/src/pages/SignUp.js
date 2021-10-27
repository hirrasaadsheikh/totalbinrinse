import React from "react";
import Register from "../component/screen/Register";
import "../component/screen/Landing.css";
import Navbar from "../component/screen/Navbar";

const SignUp = () => {
  return (
    <React.Fragment>
    <Navbar />
        <div className= "one">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <Register />
                </div>
            </div>
        </div>

    </React.Fragment>
  );
};

export default SignUp;
