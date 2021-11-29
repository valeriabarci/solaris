const express = require('express');
const app = express();
const porta = 3000;

app.get('/', function(req, res){
    res.send("Página Inicial")
});

app.get('/sobre', function(req, res){
    res.send("Página Sobre")
});

app.get('/contato', function(req, res){
    res.send("Página Sobre")
});

app.get('/admin', function(req, res){
    res.send("Página Admin")
});

app.listen(porta, () => {
    console.log('Servidor rodando !')
})