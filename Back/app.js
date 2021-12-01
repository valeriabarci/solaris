const express = require('express');
const app = express();
const porta = 3000;

// app.get('/', function(req, res){
//     res.send("Página Inicial")
// });

app.get('/', function(req, res){
    res.sendFile(__dirname + "/Front/index.html")
});

// app.get('/sobre', function(req, res){
//     res.send("Página Sobre")
// });

app.get('/sobre', function(req, res){
    res.sendFile(__dirname+ "/Front/sobre.html")
});

app.get('/contato', function(req, res){
    res.send("Página Sobre")
});

// app.get('/contato', function(req, res){
//     res.send("Página Sobre")
// }); (NÃO TEM)

// app.get('/admin', function(req, res){
//     res.send("Página Admin")
// });

app.get('/admin', function(req, res){
    res.sendFile(__dirname + "/Front/dashboard.html")
});

app.listen(porta, () => {
    console.log('Servidor rodando !')
})