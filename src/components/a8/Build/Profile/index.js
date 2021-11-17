import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProfileItem from "./ProfileItem";
import {getCurrentProfile} from "../../../../services/profileService";

const selectAllProfile = (state) => state.profile.profile;
const Profile = () => {
    const profile = useSelector(selectAllProfile);
    const dispatch = useDispatch();
    useEffect(() => getCurrentProfile(dispatch), [])
    return (
        <div>
            {
                profile.map(key =>
                    <ProfileItem profile={key}/>
                )
            }
        </div>
    );
}
export default Profile;