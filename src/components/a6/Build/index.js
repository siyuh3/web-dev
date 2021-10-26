import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList/index";
import PostSummaryList from "./PostSummaryList/index"
import ExploreComponent from "./ExploreScreen/ExploreComponent"
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/HomeScreen";

const Index = () => {
    return(
        <>

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

            <h1>Build</h1>
            <HomeScreen/>
            <ExploreScreen/>
            <ExploreComponent/>
            <PostSummaryList/>
            <WhoToFollowList/>


            <NavigationSidebar active="home"/>



        </>
    )
};

export default Index;
