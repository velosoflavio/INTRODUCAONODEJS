var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, resp){
    resp.sendFile('login.html', {root: __dirname});
});

app.post('/home', function(req, resp){
    if(req.body.nome =='flavio' && req.body.senha == '123'){
        var usuario_nome = req.body.nome;
        console.log(usuario_nome);

        app.get('/home', function(req, resp){
    resp.sendFile('home.html', {root: __dirname});
});
    }else{
        console.log("Erro");
    }
        
});
app.listen(8081, function(){
    console.log('funcionando na porta 8081');
})