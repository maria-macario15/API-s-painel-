const express = require("express")
const router = express.Router
//const {Router} = require ("")
const routes = new router()
const sites = require("./app/controllers/SitesController")
const imagens = require("./app/controllers/ImagemController")
const usuario = require("./app/controllers/UsuarioController")

routes.get("/",(req,res)=>{
    //res.json({teste:"teste"})
    res.sendFile ("painel.html",{root:'./public'})
})
routes.get("/lateral",(req,res)=>{
res.sendFile ("lateral.html",{root:'./public'})
})

routes.post("/imagens",imagens.create)
routes.get("/imagens",imagens.index)
routes.get("/sites",sites.index)
routes.get("/sites:id",sites.show)
routes.post("/usuarios",usuario.create)
routes.post("/logar",usuario.logar)

routes.get("/usuarios", usuario.index)
routes.get("/usuarios/:usuario_id",usuario.show)
module.exports= routes