let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    FX_ONEPOINT : {type : String,require:true},
    X0_ONEPOINT : {type : Number,require :true}
});

let Onepoint = mongoose.model('onepoints',userSchema);
module.exports = Onepoint;
