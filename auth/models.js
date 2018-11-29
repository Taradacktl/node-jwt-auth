'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ListSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    items:[],
});

ListSchema.methods.serialize = function () {
    return {
        _id:this._id,
        title: this.title || '',
        items:this.items,
    };
};

const ListModel = mongoose.model('List', ListSchema);

module.exports = { ListModel };
