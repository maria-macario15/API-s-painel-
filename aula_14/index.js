const express = require("express")
const server = express ()

server.use(express.json())


let sites = [
{id:1, name: "SHOPPE", site: "https://shopee.com.br/?gad_source=1&gclid=CjwKCAjw17qvBhBrEiwA1rU9w_uz7h8KLAYqjVP1jMUN3gVAJubeDRDu-ppbKGJDbnLMKqyAwL5PpBoCDcgQAvD_BwE"},
{id:2, name: "AMAZON", site: "https://amazon.com.br/"}


]

server.get("/sites", (req, res)=>{
    return res.json(sites)
})
server.get("/sites/:id", (req, res)=>{
    const id = req.params.id 
   
})
let site = sites.find(function(site) {
    return site.id === 1;
  });
  server.get("/sites/:id", (req, res)=>{
    const id = parseInt(req.params.id)
   const site = sites.find(function(site){
    return site.id === id
   })


   return res.json (sites)
})

server.listen(3000)