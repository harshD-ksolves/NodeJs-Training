const createError = require('http-errors');
const express = require('express');
const dotenv = require("dotenv");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const db=require('./db');

const authRouter=require('./routes/auth');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
//Custom Middlewares.
const appLog=require("./middlewares/customAppLog");
const { VerifyToken } = require('./middlewares/JWT');
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
.then(()=>console.log("Database connected successfuly."))
.catch(err => console.log("DB connection: "+err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth',authRouter);
app.use('/home',indexRouter);//open path
app.use('/users',VerifyToken,usersRouter);//jwt authrized path

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
