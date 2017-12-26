module.exports = function(app){
  app.get('/cadastros', function(req, res){
    console.log('Recebida requisicao de teste na porta 3000.')
    res.send('OK.');
  });

  app.post ('/cadastros/cadastro', function(req, res){
    var cadastro = req.body;
    console.log(cadastro);
    res.send ('ok');

  });
}
