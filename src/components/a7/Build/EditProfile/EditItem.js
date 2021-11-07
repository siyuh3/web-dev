import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const EditItem = ({profile})=>{
    const dispatch = useDispatch();
    const [name, setName] = useState({firstName: 'Siyu'});
    const [bio, setBio] = useState({ bio: 'Student, Software Engineer'});
    const [location, setLocation] = useState({ location: 'Boston, MA'});
    const [website, setWebsite] = useState({website:''});
    const [birth, setBirth] = useState({dateOfBirth: '7/22/1999'});
    const saveClickHandler = () => {
        dispatch({
            type: 'edit-profile',
            name
        })
        setName(name);
    }
    const saveClickXHandler = () => {
        dispatch({
            type: 'discard-change'
        })
    }
    const handleNameChange = (event) => {
        const newName = event.target.value;
        setName(newName);
    }
    const handleBioChange = (event) => {
        const newBio = event.target.value;
        setBio(newBio);
    }
    const handleLocationChange = (event) => {
        const newLocation = event.target.value;
        setLocation(newLocation);
    }
    const handleWebsiteChange = (event) =>{
        const newWebsite = event.target.value;
        setWebsite(newWebsite);
    }
    const handleBirthChange = (event) =>{
        const newBirth = event.target.value;
        setBirth(newBirth);
    }
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
                    <Link to="/a7/twitter/profile">
                        <button onClick={saveClickHandler}
                                className="rounded-pill margin-left">Save</button>
                    </Link>
                </div>
            </div>
            <div className="row mt-2">
                <img src={profile.bannerPicture} alt="bannerPicture" width="100%" height="200"/>
            </div>
            <div >
                <img src={profile.profilePicture} alt="profilePicture" width="48px" height="48px" className="rounded-circle"/>
            </div>
            <div>
                <form>
                    <div className="form-group ">
                        <label htmlFor="formGroupExampleInput">Name</label>
                        <input onChange={handleNameChange}
                               type="text" className="form-control" id="name"
                               value={name.firstName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Bio</label>
                        <input onChange = {handleBioChange}
                               type="text" className="form-control" id="bio"
                               value={bio.bio}/>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="formGroupExampleInput2">Location</label>
                        <input onChange={handleLocationChange}
                               type="text" className="form-control" id="location"
                               value={location.location}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Website</label>
                        <input onChange={handleWebsiteChange}
                               type="text" className="form-control" id="website"
                               value={website.website}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Birth date</label>
                        <input onChange={handleBirthChange}
                               type="text" className="form-control" id="birthDate"
                               placeholder="Another input"
                               value={birth.dateOfBirth}/>
                    </div>
                </form>
            </div>
        </>
    );
}
export default EditItem;