let mongoose = require('mongoose');

//Schema Validation

let userSchema = mongoose.Schema({
    FX4 : {type : String,require:true},
    X1 : {type : Number,require :true},
    X02 : {type : Number,require :true}
});

let Secant = mongoose.model('secants',userSchema);
module.exports = Secant;
