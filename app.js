var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var path = require('path');

var passport = require('./passport.js');

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var scoresRouter = require('./routes/scores');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'mymilkshakebringsalltheboystotheyard' }));


// app.use(express.static('public', {
//   etag: false
// }));


app.use(passport.initialize());
app.use(passport.session());

//setting up for deploying, api will serve game
app.use(express.static(path.join(__dirname, 'game/build')));

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/scores', scoresRouter);


//allows react router to handle routes
app.get('/*', function(req,res) {
  res.sendFile(path.join)(__dirname, 'game/build', 'index.html')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  // res.send('error')
  res.json(err)
});

module.exports = app;
