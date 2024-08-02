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
    async getSingleThought(req, res) {
        try {
            const singleThought = await Thought.findById(req.params.id);
            if (!singleThought) {
                return res.status(404).json('No thought found with that ID');
            }
            res.json(singleThought);
        } catch (error) {
            res.status(400).json(error);
            console.error(error.message);
        }
    },
    async createThought(req, res) {
        try {
            const newThought = await Thought.create(req.body);
            const user = await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: newThought._id } }, { new: true });
            if (!user) {
                return res.status(404).json('Thought created, but no user found with that ID');
            }
            res.json(newThought);
        } catch (error) {
            res.status(400).json(error);
            console.error(error.message);
        }
    },
    async updateThought(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.id, { $set: req.body }, { runValidators: true, new: true });
            if (!thought) {
                return res.status(404).json('No thought found with that ID');
            }
            res.json(thought);
        } catch (error) {
            res.status(400).json(error);
            console.error(error.message);
        }
    },
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete(req.params.id);
            const user = await User.findOneAndUpdate({username: thought.username}, {$pull: {thoughts: thought._id}}, {new: true});
            if(!user) {
                return res.status(404).json('No user found with that username');
            }
            res.json(thought);
        } catch (error) {
            res.status(400).json(error);
            console.error(error.message);
        }
    },

};