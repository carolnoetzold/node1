var express = require('express');
var consign = require('consign');
var bodyParser = require ('body-parser');


module.exports = function(){
  var app = express();

  app.get('/cadastros', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/cadastros.html'));
  });

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());


  consign()
   .include('controllers')
  
   .into(app);

  return app;
}