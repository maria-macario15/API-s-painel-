const mysql = require("mysql2")
const dbConfig = require("../config")
//Diretorio do script sendo executado
const caminhoServer = require("path")
const { visualizar } = require("../controllers/UsuarioController")

class usuario{
    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)
    }
    inserir(login,cargo,senha){
        return new Promise ((resolve, reject)=>{
            let sql = `INSERT INTO recupe (login, cargo, senha) VALUE ('${login}','${cargo}','${senha}')`
            this.conexao.query(sql, function(erro, retorno){
                if(erro) {
                  reject([400,erro])
                }  
                resolve([200,"criado"])
            })  
        })        
    }

   delete(id){
    return new Promise ((resolve, reject)=>{
      let sql = `DELETE FROM recupe WHERE id = '${id}'`
      this.conexao.query(sql, function(erro, retorno){
        if(erro) {
          reject([400,erro])
        }  
        resolve([200,"deletado"])
    })  
})        
}
ler(){
  return new Promise ((resolve, reject)=>{
    let sql = `SELECT * FROM recupe`
    this.conexao.query(sql, function(erro, retorno){
        if(erro) {
          reject([400,erro])
        }  
        resolve([200])
    })  
})        


}    

up(login, cargo, senha, id){
  return new Promise ((resolve, reject)=>{
    let sql = `UPDATE recupe SET login = '${login}',cargo = '${cargo}, senha = '${senha} WHERE id '${id}`
    this.conexao.query(sql, function(erro, retorno){
        if(erro) {
          reject([400,erro])
        }  
        resolve([200], "Atualizado")
    })  
})        


}    





}


//let usuarios = new usuario()
//usuarios.inserir("maria", "adm", "1234")
module.exports = new usuario()