import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ProfileComponent from "./ProfileComponent";
import PostSummaryList from "../PostSummaryList";
import Profile from "../Profile";
const ProfileScreen = () => {
    return(
        <div className="container">
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-md-2 col-xl-2 ">
                    <NavigationSidebar active="profile"/>
                </div>
                <div className="col-6 col-lg-7 col-md-10 col-sm-10 col-xl-6 centerbox">
                    <Profile/>
                    <ProfileComponent/>
                </div>
                <div className="col-4 d-none d-lg-block col-lg-4 col-xxl-4 col-xl-4">
                    <PostSummaryList title="What's happening"/>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;