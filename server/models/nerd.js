var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NerdSchema = new Schema({
    name: String,
    ability: String,
    likes: {type: Number, default: 0},
    status: {type: String, default: "active"},
    delete: {type: Number, default: 1},
}, {timestamps: true});

mongoose.model('Nerd', NerdSchema);
