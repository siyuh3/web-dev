import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/todo/TodoList.js"
const Index = () => {
    return(
        <>
            <h1>Practice</h1>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/practice">
                Practice
                |
            </Link>
            <Link to="/a6/twitter/home">
                Home
                |
            </Link>
            <Link to="/a6/twitter/explore">
                Explore
            </Link>
        </>
    )
};

export default Index;
