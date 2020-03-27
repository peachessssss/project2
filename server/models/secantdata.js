let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    FX_SECANT : {type : String,require:true},
    X1_SECANT : {type : Number,require :true},
    X0_SECANT : {type : Number,require :true}
});

let Secant = mongoose.model('secants',userSchema);
module.exports = Secant;
