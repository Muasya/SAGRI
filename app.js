
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser  = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');

// import routes
const index = require('./routes/index');
const home = require('./routes/index');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// const crypto = require('./routes/crypto')
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// set routes
app.use('/', index) // index Route
app.use('/home', index) // home Routes
// app.use('/api', api) // API Routes
// app.use('/files', binaryfiles) // file upload Routes for the 
app.use('/:id', index) // index Route


// database conection string

// const mongoURL = (process.env.ENV_TYPE == 'dev') ? process.env.MONGODB_URI : process.env.PROD_MONGODB_URI;


// connect to the database
// mongoose.connect(mongoURL, function (err, success) {

//     if (success) {
//       console.log('DB connected successully');
//     }else if(err){
//       console.log('DB connection failed');
//     }

// });




app.get('/:id', (req, res) => {

		res.render('index', {text: 'User home route'})


})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
  // res.render('index');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('index');
});












module.exports = app;
