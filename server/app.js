var createError = require('http-errors');
var express = require('express');
var path = require('path');
const API_PORT = 4000;


//mongoDB CONNECT
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://peachessssss:peaches2541@cluster0-ipmoh.mongodb.net/shopper');
mongoose.Promise = global.Promise;


var usersRouter = require('./routes/router');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  origin:3000,
  optionsSuccessStatus:200,
  methods:['POST','GET','PUT','DELETE']
}));

app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
