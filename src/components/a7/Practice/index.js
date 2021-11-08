import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/todo/TodoList.js"
import ReduxExamples from "./ReduxExamples/components";
const Index = () => {
    return(
        <>
            <h1>Practice</h1>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <Link to="/a7/hello">
                Hello(All previous homeworks inside)
            </Link> |
            <Link to="/a7/practice">
                Practice
                |
            </Link>
            <Link to="/a7/twitter/home">
                Home
                |
            </Link>
            <Link to="/a7/twitter/profile">
                Profile
            </Link>
            <ReduxExamples/>
        </>
    )
};

export default Index;
