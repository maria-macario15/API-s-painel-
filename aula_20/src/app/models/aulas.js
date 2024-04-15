const mysql = require("mysql2")
const dbconfig = require ("../config")
const caminhoServer = require("path")
const { rejects } = require("assert")

class aulas{
    constructor(){
      this.conexao = mysql.createConnection(dbconfig.db)
    }

    confir(){
        return new Promisse((resolve, reject)=>{
          let sql = `SELECT * FROM  alunos`
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

        

}