const { User } = require('../models/user');

module.exports = {
    async getUsers(req, res) {
        try {
            const allUsers = await User.find();
            res.json(allUsers);
        } catch (error) {
            console.error(error.message);
        }
    }
}