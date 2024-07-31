const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true, 
            minLength: 1,
            maxLength: 280 
        },
        createdAt: {
            type: Date,
            get: (date)
        },
        username: {
            type: String,
            required: true
        },
        reactions: {

        }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true
        }
    }
);

thoughtSchema
.virtual('reactionCount')
.get(function () {
    return this.reactions.length;
});

const Thoughts = ('thought', thoughtSchema); 

module.exports = Thoughts;