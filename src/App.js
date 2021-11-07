import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build";
import './explore.css';
import HelloWorld from "./components/a7/HelloWorld";
function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/a7/hello" exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a7/twitter">
                    <Build/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
