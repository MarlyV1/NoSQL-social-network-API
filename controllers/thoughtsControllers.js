const { Thought } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const allThoughts = await Thought.find();
            res.status(200).json(allThoughts);
        } catch (error) {
            res.status(400).json(error);
            console.error(error.message);
        }
    },
};