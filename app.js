const createError = require('http-errors');
const express = require('express');
const dotenv = require("dotenv");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const db=require('./db');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
//Custom Middlewares.
const {appLog,verifyAuthHeader}=require("./middleware");
const app = express();
dotenv.config();
// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.use(logger('dev'));//Morgan Logger.
//Custom App Logger middleware.
app.use(appLog);//Middleware for whole app

//connecting to db.
db.authenticate()
.then(()=>console.log("\nDatabase connected successfuly."))
.catch(err => console.log("DB connection: "+err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Basic Routing
app.get('/', (req,res)=>{
  console.log(req.query?.name);

  res.status=200;
  res.render('index',{title:'Harsh\'s Express', message:`Hello ${req.query?.name}`});
});

//middleware for specific path.
app.post('/',verifyAuthHeader,(req,res)=>{
  console.log(req.body);

  res.status=200;
  res.send(req.body);
});

app.put('/:id',(req,res)=>{
  console.log(req.params?.id);
  
  res.status=200;
  res.send([req.body,req.params]);
});

app.delete("/:id",(req,res)=>{
  console.log(req.params?.id);

  res.status=200;
  res.send(req.params);
});

app.use('/home',indexRouter);
app.use('/users', usersRouter);

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
