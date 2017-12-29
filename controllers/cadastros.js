const path = require("path");
module.exports = function (app) {
  app.get('/cadastros', function (req, res) {
    console.log('Recebida requisicao de teste na porta 3000.')
    res.send('ta ok');
  });

  app.post('/cadastros/cadastro', function (req, res) {
    var cadastro = req.body;
    res.send(body);
    var Cadastro = db.Mongoose.model('cadastrocollection', db.CadastroSchema, 'cadastrocollection');
    var pessoa = new Pessoa({
      CadastroSchema
    });
  });
}