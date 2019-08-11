require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, {
  auth: {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  },
  useNewUrlParser: true
}).catch(err => console.error(`ERROR: ${err}`));

const express = require('express');

const app = express();

//adding cookies and sessions support to our app
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

app.use(cookieParser());

app.use(session({
  secret: (process.env.secret || 'boorakacha'),
  cookie:{
    max: 10800000
  },
  resave: true,
  saveUninitialized: true
}));

app.use(flash());

app.use((req, res, next) => {
  res.locals.flash = res.locals.flash || {};
  res.locals.flash.success = req.flash('success') || null;
  res.locals.flash.error = req.flash('error') || null;

  next();
});

//body Parser

const bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// view configurtaion
const path = require('path');

//authentication helper
const jwt = require('jsonwebtoken');
const isAuthenticated = (req) => {

  const token= (req.cookies && req.cookies.token) ||( req.body && req.body.token) || (req.query && req.query.token) || (req.headers && req.headers['x-access-token']);

  if (req.session.userId) return true;

  if (!token) {
    return false;
  } else {
    jwt.verify(token, "bobthebuilder", function (err, decoded) {
      if (err) {
        return false;
      } else {
        return true;
      }
    });
  }
  
};

app.use((req, res, next) => {
  req.isAuthenticated = () => {
    if (!isAuthenticated(req)) {
      return false;
    }
    return true;
  }

  res.locals.isAuthenticated = isAuthenticated(req);
  next();
});

// Our routes
const routes = require("./routes.js");
app.use("/api", routes);

// Handles any requests that don't match the ones above
const root = path.join(__dirname, '/client/build');
app.use(express.static(root));
app.use((req, res, next) => {
  if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
    res.sendFile('index.html', { root });
  } else next();
});

const port= process.env.PORT || 4000;
app.listen(port, ()=> console.log(`listening on port ${port}`));

