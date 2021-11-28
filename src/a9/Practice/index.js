import React from "react";
import {Link} from "react-router-dom";

import Movies from "./Movies";
const Index = () => {
    return(
        <>
            <h1>Practice</h1>

            <Link to="/a8/hello">
                Hello(All previous homeworks inside)
            </Link> |
            <Link to="/a9/twitter/home">
                Twitter
            </Link>
            <Movies/>

        </>
    )
};

export default Index;
