const express = require("express");
const mysql = require("mysql2")
const server = express();
const porta = 443;
const fileupload = require("express-fileupload")

server.use(fileupload())
server.use(express.json())
server.use(express.urlencoded({extended:false}))

const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"painel"
})

server.use(express.static("public"))

conexao.connect(function(erro){

    if(erro) throw erro
    console.log("Conexão realizada com sucesso")

})


//raiz do painel
server.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/pagina.html")
})

//painel lateral
server.get("/lateral", (req,res)=>{
    res.sendFile(__dirname + "/public/pagina.html")
})


//Mostrar lista
server.get("/sites", (req,res) => {
    console.debug("GET :: /sites/:id")
    return res.json(sites)
})


