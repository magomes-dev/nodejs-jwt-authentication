const mongoose = require('mongoose');
const uuid = require('uuid');
const Schema = mongoose.Schema;

const schema = new Schema({
    _id: { 
        type: String, 
        index: { unique: true }, 
        default: uuid.v4 
      },
    username: { type: String, unique: true, required: true },
    hash: { type: String, unique: true, required: true },
    firstName: { type: String, unique: true, required: true },
    lastName: { type: String, unique: true, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);