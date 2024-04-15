const express = require("express")
const router = express.Router
//const {Router} = require ("")
const routes = new router()
const sites = require("./app/controllers/SitesController")
const imagens = require("./app/controllers/ImagemController")
const usuario = require("./app/controllers/UsuarioController")

routes.get("/",(req,res)=>{
  
    res.sendFile ("painel.html",{root:'./public'})
})
routes.get("/lateral",(req,res)=>{
res.sendFile ("lateral.html",{root:'./public'})
})

routes.get("/pagina",(req,res)=>{
    res.sendFile ("pagina.html",{root:'./public'})
    })


    
routes.post("/usuario",usuario.create)
routes.put("/usuario:id",usuario.atualizar) 
routes.post("/imagens",imagens.create)
routes.get("/imagens",imagens.index)
routes.get("/sites",sites.index)
routes.get("/sites:id",sites.show)
routes.delete("/login/:id",usuario.excluir)
routes.get("/usuario",usuario.visualizar)

module.exports= routes