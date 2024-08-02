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
    async updateUser(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {runValidators: true, new: true})
            if(!user) {
                return res.status(404).json('No user found with that ID')
            }
            res.json(user);
        } catch (error) {
            res.status(400).json(error);
            console.error(error.message);
        }
    },
    async deleteUser(req, res) {
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.id);
            if(!deletedUser) {
                return res.status(404).json('No user found with that ID')
            }
            res.json(deletedUser);


        } catch (error) {
            res.status(400).json(error);
            console.error(error.message);
        }
    },




};