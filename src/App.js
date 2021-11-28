import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Practice8 from "./components/a8/Practice";
import Practice9 from "./a9/Practice";
import Practice from "./components/a7/Practice/";
import Practice2 from "./components/a6/Practice";
import Build from "./components/a7/Build";
import Build8 from "./components/a8/Build";
import './explore.css';
import HelloWorld from "./components/a7/HelloWorld";
import HelloWorld2 from "./components/a6/HelloWorld";
import HelloWorld8 from "./components/a8/HelloWorld";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
import A9 from "./a9";
function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Link to="/a8/practice">A8</Link> |
                <Link to="/a9/practice">A9</Link>

                <Route path="/a7/hello" exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path="/a6/hello" exact={true}>
                    <HelloWorld2/>
                </Route>
                <Route path="/a8/hello" exact={true}>
                    <HelloWorld8/>
                </Route>
                <Route path="/a6/practice" exact={true}>
                    <Practice2/>
                </Route>
                <Route path="/a7/practice" exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a8/practice" exact={true}>
                    <Practice8/>
                </Route>
                <Route path={["/", "/a9", "/a9/practice"]} exact={true}>
                    <Practice9/>
                </Route>
                <Route path="/a7/twitter">
                    <Build/>
                </Route>
                <Route path="/a8/twitter">
                    <Build8/>
                </Route>
                <Route path="/a6/twitter/home" component={HomeScreen}/>
                <Route path="/a6/twitter/explore" component={ExploreScreen}/>
                <Route path="/a9">
                    <A9/>
                </Route>


            </div>
        </BrowserRouter>
    );
}

export default App;
