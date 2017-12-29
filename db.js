var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node1');

var cadastroSchema = mongoose.Schema({
    nome: String,
    endereco: String,
    cidade: String,
    telefone: String
});

var cadastroModel = mongoose.model('Cadastro',cadastroSchema);

module.exports = {cnn:mongoose.connection,cadastro:cadastroModel}