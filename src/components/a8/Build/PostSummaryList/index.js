import post from "./post.json";
import PostSummaryItem from "./PostSummaryItem";
import React from "react";
const PostSummaryList = () =>{

    return(
        <>
            <div className="borderbox">
                <h4>What's happening</h4>
        {

            post.map( (post, key) => {
                return(
                    <PostSummaryItem key={key} post={post}/>
                );
            })
        }
            </div>
        </>
        );}
export default PostSummaryList;