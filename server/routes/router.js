var express = require('express');
var router = express.Router();
let Bisection = require('../models/bisectiondata');
let False = require('../models/falsedata');
let Onepoint = require('../models/onepointdata');
let Raphson = require('../models/raphsondata');
let Secant = require('../models/secantdata');
let Cramer = require('../models/cramerdata')

router.get('/showbisection', function(req, res, next) {
 
  Bisection.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })
});

router.get('/showfalse', function(req, res, next) {
 
  False.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })  
});

router.get('/showonepoint', function(req, res, next) {
 
  Onepoint.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })  
});

router.get('/showraphson', function(req, res, next) {
 
  Raphson.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })  
});

router.get('/showsecant', function(req, res, next) {
 
  Secant.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })  
});

router.get('/showcramer', function(req, res, next) {
 
  Cramer.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })  
});

router.post('/addbisection',(req,res)=>{
  console.log(req.body);
  let doc = new Bisection(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

router.post('/addfalse',(req,res)=>{
  console.log(req.body);
  let doc = new False(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

router.post('/addonepoint',(req,res)=>{
  console.log(req.body);
  let doc = new Onepoint(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

router.post('/addraphson',(req,res)=>{
  console.log(req.body);
  let doc = new Raphson(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

router.post('/addsecant',(req,res)=>{
  console.log(req.body);
  let doc = new Secant(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

router.post('/addcramer',(req,res)=>{
  console.log(req.body);
  let doc = new Cramer(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

module.exports = router;
