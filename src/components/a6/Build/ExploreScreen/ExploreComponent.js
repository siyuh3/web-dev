import PostSummaryList from "../PostSummaryList/index";
import React from "react";
const ExploreComponent = () => {
    return (
        <>
            <div className="row">
                <div className="col-10 mb-2 searchbox">
                    <i className="bi bi-search text-secondary"/>
                    <input className="form-control" placeholder="Search Twitter"/>

                </div>
                <div className="col-2 pull-right">
                    <i className="fa fa-cog fa-2x" style={{color: "#4e9dd0"}}/>
                </div>
            </div>
           <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html, ">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html,">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="sports.html">Sports</a>
                </li>
                <li className="nav-item d-sm-none d-md-block">
                    <a className="nav-link " href="entertainment.html ">Entertainment</a>
                </li>

           </ul>

           <div className="overlap1">
                <img className="mt-sm-2"
                     src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                     alt="largeImg" width="100%" height="100%"/>
                <span className="overlap2"><b>SpaceX's Starship</b></span>
           </div>
           <div className="borderbox mt-sm-2">
                {PostSummaryList()}
           </div>
        </>
    );
}
export default ExploreComponent;
