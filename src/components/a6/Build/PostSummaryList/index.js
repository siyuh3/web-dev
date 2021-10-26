import post from "./post.json";
import PostSummaryItem from "./PostSummaryItem";
import React from "react";
const PostSummaryList = () =>{

    return(
        <>
        {
            post.map( post => {
                return(
                    <PostSummaryItem post={post}/>
                );
            })
        }
        </>
        );}
export default PostSummaryList;