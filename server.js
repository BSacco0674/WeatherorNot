const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3001;
const cors = require('cors')
const favicon = require('serve-favicon');
const path = require('path');

require('dotenv').config();
require('./config/database');

const userRouter = require('./routes/users');
const apiRouter = require('./routes/api');


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.json());

// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')))

app.use('/api/users', userRouter);
app.use('/api', apiRouter);

app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});

// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });