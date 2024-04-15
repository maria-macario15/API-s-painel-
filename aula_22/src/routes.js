const express = require("express")
const router = express.Router
//const {Router} = require ("")
const routes = new router()
const pagina = require("./app/controllers/paginaController")
const sites = require("./app/controllers/SitesController")
const imagens = require("./app/controllers/ImagemController")

routes.get("/",(req,res)=>{
    //res.json({teste:"teste"})
    res.sendFile ("painel.html",{root:'./public'})
})
routes.get("/lateral",(req,res)=>{
res.sendFile ("lateral.html",{root:'./public'})
})
routes.get("/pagina",(req,res)=>{
    res.sendFile ("pagina.html",{root:'./public'})
    })

    routes.post("/imagens",pagina.create)




    routes.post("/imagens",imagens.create)

routes.get("/sites",sites.index)
routes.get("/sites:id",sites.show)

module.exports= routes