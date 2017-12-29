var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node1');

var cadastroSchema = new mongoose.Schema({
    nome: String,
    endereco: String,
    cidade: String,
    telefone: String
}, {
    collection: 'contatocollection'
});

module.exports = { Mongoose: mongoose, CadastroSchema: cadastroSchema }