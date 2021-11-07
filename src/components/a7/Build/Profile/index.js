import React from "react";
import {useSelector} from "react-redux";
import ProfileItem from "./ProfileItem";

const selectAllProfile = (state) => state.profile.profile;
const Profile = () => {
    const profile = useSelector(selectAllProfile);
    return (
        <div>
            {
                profile.map(profile =>
                    <ProfileItem profile={profile}/>
                )
            }
        </div>
    );
}
export default Profile;