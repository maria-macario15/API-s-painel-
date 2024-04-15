const express = require("express")
const router = express.Router
//const {Router} = require ("")
const routes = new router()
const sites = require("./app/controllers/SitesController")
const imagens = require("./app/controllers/ImagemController")
const aulas = require("./app/controllers/aulasController")

routes.get("/",(req,res)=>{
    //res.json({teste:"teste"})
    res.sendFile ("painel.html",{root:'./public'})
})
routes.get("/lateral",(req,res)=>{
res.sendFile ("lateral.html",{root:'./public'})
})
routes.get("/inserir_aulas.html",(req,res)=>{
    res.sendFile ("inserir_aulas.html",{root:'./public'})
    })
routes.post("/imagens",imagens.create)
routes.get("/imagens",imagens.index)
routes.get("/sites",sites.index)
routes.get("/sites:id",sites.show)

module.exports= routes