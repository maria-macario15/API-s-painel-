const Imagem = require("../models/Imagem")
class ImagemController{
   //Mostrar lista    
   index(req,res){
    
        console.debug("GET :: /imagens")
        Imagem.indexx().then(
        resposta=>{
            res.status(resposta).json(resposta[1])
        }   
        ).catch 
        resposta=>{
            res.status(resposta[0]).json("ERRO:"+ resposta[1].errno)
        }
      
    }
    
    create(req,res){
    let alternativo =  req.body.alternativo
    let nomeImagem = req.files.imagem.name
    //Separando estensao do ARQUIVO
    nomeImagem = nomeImagem.split(".")
    //PEGANDO EXTENSAO
    console.debug(nomeImagem)
    let extensao = nomeImagem[nomeImagem.length-1] 

    console.debug(extensao)
    if (extensao === 'jpg'){
    nomeImagem = new Date().getTime() + "." + extensao 
    let Arq = req.files.imagem
    
    Imagem.inserir(Arq, alternativo, nomeImagem).then(
     resposta=>{
        res.status(resposta).json("inserido")
     }   
    ).catch 
    resposta=>{
        res.status(resposta[0]).json("ERRO:"+ resposta[1].errno)
    }
    }
    else{
        res.status(415).json({messege:"Tipo de arquivo nao suportado"})
    }

    
    }
}
module.exports = new ImagemController()
