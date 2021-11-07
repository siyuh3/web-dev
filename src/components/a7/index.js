import React from "react";
import {Link} from "react-router-dom";

const A6 = () => {
    return (
        <>
            <h2>Assignment 6</h2>
            <Link to="/a7/hello">
                Hello
            </Link> | &nbsp;
            <Link to="/a7/practice">
                Practice
            </Link> | &nbsp;
            <Link to="/a7/twitter/explore">
                Build
            </Link> | &nbsp;
            <Link to="/a7/twitter/home">
                Challenge
            </Link>
        </>
    )
};

export default A6;