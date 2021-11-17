import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11" style={{"position": "relative"}}>
                    <i className="fa fa-search position-absolute"
                       style={{"left": "25px", "top": "11px"}}></i>
                    <input placeholder="Search Twitter"
                           className="ps-5 form-control rounded-pill mb-2 col-11"/>
                </div>
                <div className="col-1">
                    <a href="setting.html">
                        <i className="mt-1 fa fa-2x fa-cog float-end"></i>
                    </a>
                </div>
            </div>
            <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">
                        For you
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">
                        Trending
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">
                        News
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">
                        Sports
                    </a>
                </li>
                <li className="nav-item d-sm-none d-md-inline">
                    <a className="nav-link" href="entertainment.html">
                        Entertainment
                    </a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img alt="whatever" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" width="100%"/>
                <h2 style={{color: 'white'}} className="fw-bold ms-2 position-absolute bottom-0">
                    SpaceX's Starship</h2>
            </div>
            <PostSummaryList/>
        </>
    );
}

export default ExploreComponent;
