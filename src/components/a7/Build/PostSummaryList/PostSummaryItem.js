import React from "react";
const PostSummaryItem=({
                           post = {
                               "topic": "Web Development",
                               "userName": "ReactJS",
                               "time": "2h",
                               "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                               "image": "../../../images/react-blue.png"
                           }
                       }
)=>{
    return(

            <div className="row p-lg-3">
                        <div className="col-10 mt-sm-2">
                            <div className="wd-trending-topic">{post.topic}</div>
                            <b className="text-white">{post.userName}</b>
                            <i className="bi bi-patch-check-fill text-white">
                                
                            </i>
                            -
                                <span>{post.time}</span>
                            <br/>
                            <b className="text-white">{post.title}
                            </b>
                        </div>
    
                        <div className="col-2 mt-sm-2">
                            <img className="wd-rounded-logo" alt = {"pic1"} src={post.image} height="100%" width="100%"/>
                        </div>
                    </div>

    );
}
export default PostSummaryItem;