const Imagem = require("../models/Imagem")
class ImagemController{
   //Mostrar lista    
   index(req,res){
    console.debug("GET :: /sites")
    return res.json(sites)
    }
    create(req,res){
    let alternativo =  req.body.alternativo
    let nomeImagem = req.files.imagem.name
    //Separando estensao do ARQUIVO
    nomeImagem = nomeImagem.split(".")
    //PEGANDO EXTENSAO
    let extensao = new Date().getTime() + "." + nomeImagem[nomeImagem.length-1] 
    if (extensao === 'jpg'){
    let Arq = req.files.imagem
    
    Imagem.inserir(Arq, alternativo, nomeImagem)
    res.json()
}
else{
    res.status(415).json({messege:"Tipo de arquivo nao suportado"})
}

}
}
module.exports = new ImagemController()
