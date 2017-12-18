app.post("/pagamentos",function(req, res) {
  var pagamento = req.body;
  console.log(pagamento);
  res.send('ok');
});