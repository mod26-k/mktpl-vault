const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cidSchema = new Schema({
    title: {type: String, required: true},
    fileType: {
        type: String,
        enum: ['img', '.txt', '.json'],
        required: true
    },
    cid: {type: String, required: true},
    // creator: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }
})

module.exports = mongoose.model('Cid', cidSchema);
