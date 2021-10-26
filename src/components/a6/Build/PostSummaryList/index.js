import post from "./post.json";
import PostSummaryItem from "./PostSummaryItem";
import React from "react";
const PostSummaryList = () =>{

    return(
        <>
        {
            post.map( (post, key) => {
                return(
                    <PostSummaryItem key={key} post={post}/>
                );
            })
        }
        </>
        );}
export default PostSummaryList;