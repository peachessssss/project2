let mongoose = require('mongoose');

//Schema Validation

let userSchema = mongoose.Schema({
    FX1 : {type : String,require:true},
    XL1 : {type : Number,require :true},
    XR1 : {type : Number,require :true}
});

let False = mongoose.model('falses',userSchema);
module.exports = False;
