import PostList from "../PostList/PostList";
import posts from "./../PostList/posts.json";

import React from "react";
const HomeComponent = () => {
    return (
            <div className="mt-sm-2">
                {PostList(posts)}
           </div>
    );
}

export default HomeComponent;