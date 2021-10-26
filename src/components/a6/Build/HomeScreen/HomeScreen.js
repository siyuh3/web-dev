import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import HomeComponent from "./HomeComponent";
import PostSummaryList from "../PostSummaryList";

const HomeScreen = () => {
    return(
        <div className="container">
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-md-2 col-xl-2 ">
                    {NavigationSidebar('home')}
                </div>
                <div className="col-6 col-lg-7 col-md-10 col-sm-10 col-xl-6 centerbox">
                    {HomeComponent()}
                </div>
                <div className="col-4 d-none d-lg-block col-lg-4 col-xxl-4 col-xl-4">
                    {PostSummaryList()}
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;