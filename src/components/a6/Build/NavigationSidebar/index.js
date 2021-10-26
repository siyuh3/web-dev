/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
const NavigationSidebar = (active) => {
    return (
        <>
            <div className="list-group">
                <Link to="/a6/" className="list-group-item">
                    <i className="fab fa-twitter" />
                </Link>
                <Link to="/a6/twitter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                    <i className="fas fa-home" />
                    <span>Home</span>
                </Link>
                <Link to="/a6/twitter/explore" className={`list-group-item ${active.active === 'explore' ? 'active' : ''}`}>
                    <i className="fa fa-hashtag" />
                    <span>Explore</span>
                </Link>
                <a className="list-group-item" href="#">
                    <i className="fa fa-bell" />
                    <span>Notifications</span>
                </a>
                <a className="list-group-item" href="#">
                    <i className="fa fa-envelope" />
                    <span>Messages</span>
                </a>
                <a className="list-group-item" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                        <path
                            d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                    </svg>
                    <span>Bookmarks</span>
                </a>
                <a className="list-group-item" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-list-ul" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                    <span>Lists</span>
                </a>
                <a className="list-group-item" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <span>Profile</span>
                </a>
                <a className="list-group-item" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-three-dots" viewBox="0 0 16 16">
                        <path
                            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                    <span>More</span>
                </a>

            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}

export default NavigationSidebar;