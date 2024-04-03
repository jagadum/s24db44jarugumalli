var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Dress = require("./models/dress");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dressRouter = require('./routes/dress'); 
var gridRouter = require('./routes/grid'); 
var pickRouter = require('./routes/pick');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dress', dressRouter);
app.use('/grid', gridRouter);
app.use('/pick', pickRouter);
app.use('/resource', resourceRouter);


// DB connectiony
require('dotenv').config();
var mongoose = require('mongoose');
const connectionString = process.env.MONGO_CON;
mongoose.connect(connectionString);
var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function() {
  console.log("Connection to DB succeeded");
  recreateDB();
});

//instance creation
async function recreateDB(){
  try {
    await Dress.deleteMany();
    let instance1 = new Dress({dress_type:"Casual", size:'Medium', price:30});
    await instance1.save();
    console.log("First object saved");
    let instance2 = new Dress({dress_type:"Formal", size:'Small', price:50});
    await instance2.save();
    console.log("Second object saved");
    let instance3 = new Dress({dress_type:"Party", size:'Large', price:40});
    await instance3.save();
    console.log("Third object saved");
  } catch (err) {
    console.error(err);
  }
}


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
