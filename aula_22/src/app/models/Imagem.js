const mysql = require("mysql2")
const dbconfig = require ("../config")
const caminhoServer = require("path")

class Imagem{
  constructor(){
    this.conexao = mysql.createConnection(dbconfig.db)
}
    inserir(Arq, alternativo,nomeImagem){
    let sql = `INSERT INTO anuncios (alternativo, caminho) VALUE ('${alternativo}','${nomeImagem}')`
    this.conexao.query(sql, function(erro){
        if(erro) throw erro
     Arq.mv (caminhoServer + "/../public/img/" + nomeImagem)
    })
}
}



module.exports = new Imagem()
