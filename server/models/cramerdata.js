let mongoose = require('mongoose');

//Schema Validation

let userSchema = mongoose.Schema({
    MATRIXA : {type : Array,require :true},
    MATRIXB : {type : Array,require :true},
    N : {type : Number,require : true}
});

let Cramer = mongoose.model('cramers',userSchema);
module.exports = Cramer;
