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
            const singleUser = await User.findOne({ _id: req.param.id})
                .select('-__v')
                .populate('thought')
                .populate('user');

            res.json(singleUser);
        } catch (error) {
            res.status(400).json(message);
            console.error(error.message);
        }   
    },

    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.status(200).json(newUser);  
        } catch (error) {
            res.status(400).json(error);
            console.error(error.message);
        }  
    },
};