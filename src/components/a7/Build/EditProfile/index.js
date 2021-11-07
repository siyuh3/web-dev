import React from "react";
import {useSelector} from "react-redux";
import EditItem from "./EditItem";
const selectAllProfile = (state) => state.profile.profile;

const Profile = () => {
    const profile = useSelector(selectAllProfile);
    return(
        <ul className="list-group">
            {
                profile.map(profile =>
                    <EditItem profile={profile}/>
                )
            }
        </ul>
    )
}
export default Profile;