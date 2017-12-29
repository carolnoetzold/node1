var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var mongo = require('../db.js');
var app = express();

module.exports = function(){

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  mongo.cnn.on('error', console.error.bind(console, 'connection error:'));
  mongo.cnn.once('open', function() {
    console.log('Conexão aberta!');
  });

  consign()
   .include('controllers')
   .into(app);

  return app;
}