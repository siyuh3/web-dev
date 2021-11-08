import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import Practice from "./components/a7/Practice";
import Practice2 from "./components/a6/Practice";
import Build from "./components/a7/Build";
import './explore.css';
import HelloWorld from "./components/a7/HelloWorld";
import HelloWorld2 from "./components/a6/HelloWorld";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/a7/hello" exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path="/a6/hello" exact={true}>
                    <HelloWorld2/>
                </Route>
                <Route path="/a6/practice" exact={true}>
                    <Practice2/>
                </Route>
                <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a7/twitter">
                    <Build/>
                </Route>
                <Route path="/a6/twitter/home" component={HomeScreen}/>
                <Route path="/a6/twitter/explore" component={ExploreScreen}/>


            </div>
        </BrowserRouter>
    );
}

export default App;
