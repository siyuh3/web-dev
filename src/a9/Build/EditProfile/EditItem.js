import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {updateCurrentProfile} from "../../services/profileService";

const EditItem = ({profile})=>{
    const dispatch = useDispatch();
    const [localProfile, setLocalProfile] = useState(profile);
    // const [name, setName] = useState('Siyu');
    // const [bio, setBio] = useState('Student, Software Engineer');
    // const [location, setLocation] = useState('Boston, MA');
    // const [website, setWebsite] = useState('');
    // const [birth, setBirth] = useState('7/22/1999');
    const saveClickHandler = () => {
        const _profile = {...localProfile, firstName: localProfile.firstName, bio: localProfile.bio,
            location: localProfile.location, website: localProfile.website, dateOfBirth: localProfile.dateOfBirth};
        // dispatch({
        //     type: 'edit-profile',
        //     profile: _profile
        // })
        updateCurrentProfile(dispatch, _profile);
    }
    const saveClickXHandler = () => {
        dispatch({
            type: 'discard-change'
        })
    }

    const handleChange = (newProfile) =>
        setLocalProfile(newProfile);

    return (
        <>
            <div className="row mt-2">
                <div className={"col-2"}>
                    <Link to="/a7/twitter/profile">
                        <i onClick={saveClickXHandler}
                            className="fas fa-times"/>
                    </Link>
                </div>

                <div className={"col-5"}>
                    <h4>Edit profile</h4>
                </div>
                <div className="col-1">
                    <Link to="/a9/twitter/profile">
                        <button onClick={saveClickHandler}
                                className="rounded-pill margin-left">Save</button>
                    </Link>
                </div>
            </div>
            <div className="row mt-2">
                <img src={profile.bannerPicture} alt="bannerPicture" width="100%" height="200"/>
            </div>
            <div >
                <img src={profile.profilePicture} alt="profilePicture" width="48px" height="48px"
                     className="rounded-circle"/>
            </div>
            <div>
                <form>
                    <div className="form-group" >
                        <label htmlFor="formGroupExampleInput">Name</label>
                        <input onChange={(event) =>
                            handleChange({...localProfile, firstName: event.target.value})}
                               type="text" className="form-control bg-black text-white border" id="name"
                               value={localProfile.firstName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Bio</label>
                        <input onChange={(event) =>
                            handleChange({...localProfile, bio: event.target.value})}
                               type="text" className="form-control bg-black text-white border" id="bio"
                               value={localProfile.bio}/>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="formGroupExampleInput2">Location</label>
                        <input onChange={(event) =>
                            handleChange({...localProfile, location: event.target.value})}
                               type="text" className="form-control bg-black text-white border" id="location"
                               value={localProfile.location}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Website</label>
                        <input onChange={(event) =>
                            handleChange({...localProfile, website: event.target.value})}
                               type="text" className="form-control bg-black text-white border" id="website"
                               value={localProfile.website}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Birth date</label>
                        <input onChange={(event) =>
                            handleChange({...localProfile, dateOfBirth: event.target.value})}
                               type="text" className="form-control bg-black text-white border" id="birthDate"
                               placeholder="Another input"
                               value={localProfile.dateOfBirth}/>
                    </div>
                </form>
            </div>
        </>
    );
}
export default EditItem;