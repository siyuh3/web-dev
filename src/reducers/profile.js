import owner from './data/profile.json';

const initialState = {
    profile: owner
};

const profile = (state = initialState, action) => {
    switch (action.type){
        case 'edit-profile':
            return {
                ...state,
                profile: action.profile
            };
            break
        case 'discard-change':
            return(state);
            break
        default:
            return(state);
    }
};

export default profile;