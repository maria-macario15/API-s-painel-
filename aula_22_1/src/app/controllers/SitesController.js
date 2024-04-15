let sites = [
    {id:1, name: "SHOPPE", site: "https://shopee.com.br/"},
    {id:2, name: "AMAZON", site: "https://amazon.com.br/"},
    {id:3, name:"SENAI ES", site:"htpps://senaies.com.br/"}
]
class SitesController{
    //Mostrar lista    
    index(req,res){
    console.debug("GET :: /sites")
    return res.json(sites)
}
    //Mostrar um elemento da lista
    show(req,res){
        server.get("/sites/:id",(req,res) => {
            const id = parseInt(req.params.id)
            const site = sites.find(function(site){
                return site.id === id
            })
    })
              
    }
    
    //Inserir um elemento na lista
    create(req,res){
    console.debug("POST :: /sites/:id")
    return res.json(sites)

    }

    // Atualizar um registro
    update(req,res){
    console.debug("PUT :: /sites/:id")
    return res.json(sites)
    }

    //Deletando um registro
    destroy(req,res){
    console.debug("DELETE :: /sites/:id")
    return res.json(sites) 
    }
}

module.exports = new SitesController()