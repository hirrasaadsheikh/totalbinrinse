import React from "react";
import "./Landing.css";
import Header from "./Header";


const cart = () => {
    return (
        <>
       <Header />
        <div className="cart-main">
            <h4 style={{textAlign: "center", fontFamily: "Bell MT", margin: "5%"}}>Cart Empty</h4>
            <div className= "checkout">
                <div className= "checkout-total"> Total: $  </div>
                <button>
                    Checkout
                </button>
            </div>
        </div>
        </>
    );
};
export default cart;
