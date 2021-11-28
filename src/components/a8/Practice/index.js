import React from "react";
import {Link} from "react-router-dom";
import APIExamples from "./APIExamples";
const Index = () => {
    return(
        <>
            <h1>Practice</h1>

            <Link to="/a8/hello">
                Hello(All previous homeworks inside)
            </Link> |
            <Link to="/a8/practice">
                Practice
                |
            </Link>
            <Link to="/a8/twitter/home">
                Home
                |
            </Link>
            <Link to="/a8/twitter/profile">
                Profile
            </Link>
            <APIExamples/>

        </>
    )
};

export default Index;
