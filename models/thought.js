const { Schema, model } = require('mongoose');
const dayJS = require('dayjs');
const reactionSchema = require('./reaction');

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
            default: Date.now,
            get: (date) => dayJS(date).format('MM/DD/YYYY'),
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