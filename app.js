let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let session = require('express-session');
let flash = require('req-flash');
// import createError from 'http-errors';
// import express from 'express';
// import path from 'path';
// import cookieParser from 'cookie-parser';
// import logger from 'morgan';

//import studentContrller from './app/controller/student_controller';
let studentContrller = require('./app/controllers/student_controller');
//let indexRouter = require('./routes/index');
//let siswaRouter = require('./routes/users');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({
secret: 'djhxcvxfgshajfgjhgsjhfgsakjeauytsdfy',
resave: false,
saveUninitialized: true
}));
app.use(flash());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req, res, next) {
  res.render('index', { title: 'Tutorial Crud' });
});
app.get('/data_siswa', studentContrller.getAllStudent);
app.get('/input_siswa', studentContrller.saveStudentShowForm);
app.post('/save_student', studentContrller.saveStudent);
app.get('/edit_siswa/:code', studentContrller.updateStudentShowForm);
app.get('/detail_siswa/:code', studentContrller.getStudent);
app.get('/hapus_siswa/:code', studentContrller.deleteStudent);
app.post('/update_siswa', studentContrller.updateStudent);
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

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
