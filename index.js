const express = require("express"); //importando o express
const app = express(); //iniciando o express

app.set('view engine','ejs'); //dizendo para o express usar o EJS como View engine
app.use(express.static('public'));

app.get("/home",function(req,res){
    res.render("home");
});

app.get("/cadastro",function(req,res){
    res.render("cadastro");
})

app.get("/mural",function(req,res){
    res.render("mural");
})

app.get("/login",function(req,res){
    res.render("login");
})

app.listen(30,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("servidor iniciado com sucesso!");
    }

})