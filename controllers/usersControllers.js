const { User } = require('../models');

module.exports = {
    async getUsers(req, res) {
        try {
            const allUsers = await User.find();
            res.status(200).json(allUsers);
        } catch (error) {
            res.status(400).json(error);
            console.error(error.message);
        }
    },

    async getOneUser(req, res) {
        try {
            const singleUser = await User.findOne({ id: req.param.id});
            res.json(singleUser);
        } catch (error) {
            res.status(400).json(message);
            console.error(error.message);
        }   
    },
}