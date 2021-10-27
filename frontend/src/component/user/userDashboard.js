import React from "react";
import {Link} from "react-router-dom";
import {FaFire} from "react-icons/all";
import {BsXDiamondFill} from "react-icons/bs";
import {IconContext} from "react-icons";
import "./Dashboard.css"
import Header from "../screen/Header";

const userDashboard = () => {
    return (
        <div>
            <Header />
            <IconContext.Provider value= {{color: "white" , size: 64}}>
                <div className="pricing__section">
                    <div className="pricing__wrapper">
                        <h2 className= "pricing__heading"><b>Services</b></h2>
                        <div className="pricing__container">
                            <Link to= "/cart" className="pricing__container-card">
                                <div className= "pricing__container-cardInfo">
                                    <div className= "icon">
                                        <FaFire/>
                                    </div>
                                    <h3> Service 1 </h3>
                                    <h3> $ 10 </h3>
                                    <h4> One Bin </h4>
                                    <ul className= "pricing__container-features">
                                        <button> Add to cart</button>
                                    </ul>
                                </div>
                            </Link>
                            <Link to= "/cart" className="pricing__container-card">
                                <div className= "pricing__container-cardInfo">
                                    <div className= "icon">
                                        <BsXDiamondFill/>
                                    </div>
                                    <h3> Service 2 </h3>
                                    <h3> $ 40 </h3>
                                    <h4> One month </h4>
                                    <ul className= "pricing__container-features">

                                        <button> Add to cart</button>
                                    </ul>
                                </div>
                            </Link>
                            <Link to= "/cart" className="pricing__container-card">
                                <div className= "pricing__container-cardInfo">
                                    <div className= "icon">
                                        <FaFire/>
                                    </div>
                                    <h3> Service 3 </h3>
                                    <h3> $ 100 </h3>
                                    <h4> Three months </h4>
                                    <ul className= "pricing__container-features">

                                        <button> Add to cart</button>
                                    </ul>
                                </div>
                            </Link>
                            <Link to= "/cart" className="pricing__container-card">
                                <div className= "pricing__container-cardInfo">
                                    <div className= "icon">
                                        <BsXDiamondFill/>
                                    </div>
                                    <h3> Service 4</h3>
                                    <h3> $ 400 </h3>
                                    <h4>12 months</h4>
                                    <ul className= "pricing__container-features">
                                        <button> Add to cart</button>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </IconContext.Provider>
        </div>
    );
};

export default userDashboard;
