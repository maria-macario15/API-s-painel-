const express = require("express")
const server = express()
server.get("/home",(req,res)=>{
    const {nome, idade} = req.query
    res.json ({nome:nome, idade:idade})

})
   
server.listen(3000)