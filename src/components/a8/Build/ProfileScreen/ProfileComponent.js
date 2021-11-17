import TweetList from "../TweetList/index";

import React from "react";

const ProfileComponent = () => {
    return(
        <div className="mt-sm-2">
            {TweetList()}
        </div>
    );
}

export default ProfileComponent;