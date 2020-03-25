let mongoose = require('mongoose');

//Schema Validation

let userSchema = mongoose.Schema({
    FX : {type : String,require:true},
    XL : {type : Number,require :true},
    XR : {type : Number,require :true}
});

let Bisection = mongoose.model('bisections',userSchema);
module.exports = Bisection;
