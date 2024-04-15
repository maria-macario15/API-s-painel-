const mysql = require("mysql2")
const dbconfig = require ("../config")
const caminhoServer = require("path")
const { rejects } = require("assert")

class Imagem{
  constructor(){
    this.conexao = mysql.createConnection(dbconfig.db)

}
indexx(){
return new Promisse((resolve, reject)=>{
  let sql = `SELECT * FROM  anuncios`
  this.conexao.query(sql, function(erro, retorno){
    if(erro){
      reject([400, erro])
     }
     else{
          resolve(200, retorno)

       }
    }) 
  })
}


    inserir(Arq, alternativo,nomeImagem){
    return new Promise((resolve, reject)=> {
      let sql = `INSERT INTO anuncios (alternativo, caminho) VALUE ('${alternativo}','${nomeImagem}')`
       this.conexao.query(sql, function(erro, retorno){
         if(erro){
          reject([400, erro])
         }else{
           Arq.mv (caminhoServer + "/../public/img/" + nomeImagem)
              resolve(200, retorno)
         }

      })
    })
  }
}



module.exports = new Imagem()
