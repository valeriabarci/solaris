const express = require('express');
const app = express();

app.get ("/", function (req, res) {
    res.sendFile(__dirname + "/Solaris/index.html");
});

app.get ("/sobre", function (req, res) {
    res.sendFile(__dirname + "/Solaris/sobre.html");
});

app.get ("/admin", function (req, res) {
    res.sendFile(__dirname + "/Solaris/dashboard.html");
});

app.get('/form_register', function(req, res){  
    var nome = req.query.nome;
    var email = req.query.email;
    var cep = req.query.cep;
    var rua = req.query.rua;
    var num_residencial = req.query.num_residencial;
    var bairro = req.query.bairro;
    var qtd = req.query.qtd;
    var cpf = req.query.cpf;
    var nome2 = req.query.nome2;
    var renda_total = req.query.renda_total;


    res.send('Nome:' + nome);
    res.send('Email:' + email);
    res.send('CEP:' + cep);
    res.send('Rua:' + rua);
    res.send('Nº:' + num_residencial);
    res.send('Bairro:' + bairro);
    res.send('Quantidade dos moradores:' + qtd);
    res.send('CPF dos Residentes:' + cpf);
    res.send('Nome dos Residentes:' + nome2);
    res.send('Renda Total da Família:' + renda_total);

});  