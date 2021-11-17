let profile = require('../data/profile.json');

module.exports = (app) => {
    const findAllProfile = (req, res) => {
        res.json(profile);
    }

    const updateProfile = (req, res) =>{
        const newProfile = req.body;
        profile = [newProfile];
        res.json(profile);
    }
    app.get('/api/profile', findAllProfile);
    app.put('/api/profile', updateProfile);
};