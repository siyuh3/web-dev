import React from "react";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import hello from "../reducers/hello";
import todos from "../reducers/todos";
import HelloReduxExampleComponent from "./HelloReduxExampleComponent";
import Todos from "./Todos";
const reducers = combineReducers({hello, todos})
const store = createStore(reducers);
const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};

export default ReduxExamples;
