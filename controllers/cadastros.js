const path = require("path");
const mongo = require('../db.js');
module.exports = function (app) {
  app.get('/cadastros', function (req, res) {
   mongo.cadastro.find(function (err, list) {
     if (err) {
       res.send(err);
     } else {
       res.send(list);
     }
  })

  });

  app.post('/cadastros', function (req, res) {
    var cadastro = req.body;

    var pessoa = new mongo.cadastro(cadastro);

    pessoa.save(function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send('Cadastro realizado com sucesso.');
      }
    });
  });
}