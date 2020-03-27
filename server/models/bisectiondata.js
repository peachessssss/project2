let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    FX_BISECTION : {type : String,require:true},
    XL_BISECTION : {type : Number,require :true},
    XR_BISECTION : {type : Number,require :true}
});

let Bisection = mongoose.model('bisections',userSchema);
module.exports = Bisection;
