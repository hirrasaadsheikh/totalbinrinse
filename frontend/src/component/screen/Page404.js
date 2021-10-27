import React from 'react';
import {Container, Typography} from "@material-ui/core";
import "./Landing.css";

const Page404 = () => {
    return (
        <div className= "page404">
            <Container>
                <Typography variant="h1" color={'secondary'} style={{textAlign: "center"}}>PAGE NOT FOUND 404</Typography>
            </Container>
        </div>
    );
};

export default Page404;
