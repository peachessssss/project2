let mongoose = require('mongoose');

//Schema Validation

let userSchema = mongoose.Schema({
    FX3 : {type : String,require:true},
    X01 : {type : Number,require :true}
});

let Raphson = mongoose.model('raphsons',userSchema);
module.exports = Raphson;
