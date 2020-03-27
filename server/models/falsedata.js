let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    FX_FALSE : {type : String,require:true},
    XL_FALSE : {type : Number,require :true},
    XR_FALSE : {type : Number,require :true}
});

let False = mongoose.model('falses',userSchema);
module.exports = False;
