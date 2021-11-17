import React from "react";
import {Link} from "react-router-dom";

const A6 = () => {
    return (
        <>
            <h2>Assignment 8</h2>
            <Link to="/a8/hello">
                Hello(All previous homeworks inside)
            </Link> | &nbsp;
            <Link to="/a8/practice">
                Practice
            </Link> | &nbsp;
            <Link to="/a8/twitter/home">
                Build
            </Link> | &nbsp;
            <Link to="/a8/twitter/profile">
                Challenge
            </Link>
        </>
    )
};

export default A6;