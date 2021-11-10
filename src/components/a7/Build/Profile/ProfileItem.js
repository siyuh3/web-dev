import React from "react";
import {Link} from "react-router-dom";

const ProfileItem = ({profile}) => {
  return(
      <>
          <>
              <div className="row mt-2">
                  <div className={"col-2"}>
                      <i className="bi bi-arrow-left"/>
                  </div>

                  <div className={"col-8"}>
                      <h4>{profile.firstName}{' '}{profile.lastName}</h4>

                      <span>5196 Tweets</span>
                  </div>
              </div>
              <div className="row mt-2">
                  <img src={profile.bannerPicture} alt="bannerPicture" width="100%" height="200"/>
              </div>

              <div className="row mt-2">
                  <div className={"col-2"}>
                      <img src={profile.profilePicture} alt="profilePicture" width="48px" height="48px" className="rounded-circle"/>
                  </div>
                  <div className={"col-8"}>
                      <Link to="/a7/twitter/editProfile">
                          <button className="float-right bg-black text-white">Edit profile</button>
                      </Link>
                  </div>
              </div>
              <div className="row mt-2">
                  <h4>{profile.firstName}{' '}{profile.lastName}</h4>
                  <span>5196 Tweets</span>
                  <span>@{profile.handle}</span>
                  <span>{profile.website}</span>
              </div>
              <div className="row mt-2">
                  <div>{profile.bio}</div>
              </div>
              <div>
                  <i className="bi bi-geo-alt-fill">{' '}{profile.location}{' '}</i>
                  <i className="bi bi-circle">{' '}{profile.dateOfBirth}{' '}</i>
                  <i className="bi bi-calendar3">{' '}{profile.dateJoined}{' '}</i>
              </div>
              <div>
                  <div>{profile.followingCount} following {profile.followersCount} follower</div>
              </div>
          </>
      </>
  );
};

export default ProfileItem;