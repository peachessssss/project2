let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    FX_RAPHSON : {type : String,require:true},
    X0_RAPHSON : {type : Number,require :true}
});

let Raphson = mongoose.model('raphsons',userSchema);
module.exports = Raphson;
