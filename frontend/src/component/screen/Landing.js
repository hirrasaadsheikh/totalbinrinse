import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import ReactPlayer from "react-player";
import Navbar from "./Navbar";


const Landing = () => {
    return (
        <div>
            <Navbar/>
            <div className= "hero-container">
                <h1 style={{marginTop: "5%"}}> Welcome To Total Bin Rinse</h1>
                <p className="para"> Sign in to avail our services </p>

                <Link
                    to="/register"
                    style={{
                        marginTop: "2%",
                        width: "200px",
                        height: "50px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        fontFamily: "Bell MT",
                        background: "#2c9316",
                        color: "white"
                    }}
                    className="btn btn-large waves-effect waves-light ">
                    <b>REGISTER</b>
                </Link>

                <Link
                    to="/login"
                    style={{
                        marginTop: "3%",
                        width: "200px",
                        height: "50px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        fontFamily: "Bell MT",
                        background: "#00a1fe",
                        color: "white"
                    }}
                    className="btn btn-large waves-effect waves-light hoverable green accent-3">
                    <b>LOGIN</b>
                </Link>
            </div>
            <div className= "video">
                <ReactPlayer
                    style={{display: "flex", marginLeft: "360px", paddingTop: "30px", paddingBottom: "30px"}}
                    width="800px" height = "600px" controls
                    url = "https://youtu.be/cohkELZwzv4"/>
            </div>
        </div>

    );
};

export default Landing;
