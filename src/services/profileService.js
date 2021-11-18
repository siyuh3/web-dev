
//const PROFILE_API = 'http://localhost:4000/api/profile'

let PROFILE_API = 'https://web-deb-node.herokuapp.com/api/profile'
if (process.env.DEV === "TRUE"){
    PROFILE_API = 'http://localhost:4000/api/profile';
}
export const getCurrentProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile =>
                    dispatch({
                        type:'get-current-profile',
                        profile
                    })
        );

export const updateCurrentProfile = (dispatch, profile) =>
    fetch(`${PROFILE_API}`, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response =>
            dispatch({
                type: 'edit-profile',
                profile
            }));