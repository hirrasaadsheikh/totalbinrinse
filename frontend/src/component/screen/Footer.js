import React from "react";
import { Container } from "react-bootstrap";
import "./Landing.css";

const Footer = () => {
    return (
        <div className= "foot-container">
            <footer>
                <Container>
                    <div >
                        <div className= "foot" >Copyright &copy; Total Bin Rinse</div>
                    </div>
                </Container>
            </footer>
        </div>
    );
};
export default Footer;

