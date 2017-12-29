var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();

module.exports = function(){

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  consign()
   .include('controllers')
   .then("routes")
   .into(app);

  return app;
}