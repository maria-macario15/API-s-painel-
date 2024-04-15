const mysql = require("mysql2")
const dbconfig = require ("../config")
const bcrypt = require ("bcryptjs")
const UsuarioController = require("../controllers/UsuarioController")
class usuario{

    constructor(){
        this.conexao = mysql.createConnection(dbconfig.db)
    }
    MostrarUsuario(usuario_id){
        return new Promise ((resolve,reject)=>{
            let sql =  `SELECT * FROM usuarios WHERE usuario_id ='${usuario_id}'` 
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    console.debug(erro)
                    reject([400, erro])
                }else{
                    if(retorno.length === 0){
                   resolve([404,"Usuario nao encontrado"])
                    }else{
                         resolve([200, retorno])
    
                }
    
            }
            })
            }) 

    }
    MostrarTodos(){
        return new Promise ((resolve,reject)=>{
        let sql =  `SELECT * FROM usuarios` 
        this.conexao.query(sql, function(erro, retorno){
            if(erro){
                console.debug(erro)
                reject([400, erro])
            }else{
                resolve([200, retorno])


            }

   
        })
        })
}
    inserir(nome, usuario, senha, usuario_tipo){
        let salt = bcrypt.genSaltSync (10)
        let hash = bcrypt.hashSync(senha, salt)
        
        console.log (hash)
        return new Promise ((resolve,reject)=>{
          let sql = `INSERT INTO usuarios (nome, usuario, senha, usuario_tipo)
           VALUE ('${nome}','${usuario}','${hash}', '${senha}', '${usuario_tipo}')`  
            this.conexao.query(sql, function(erro, retorno){
            if (erro){
                reject ([400, erro])

            }else{
                resolve([201, 'Usuario Inserido'])
            }


            })
        }) 

    }

verificarUsuarioSenha(usuario, senha){
return new Promise ((resolve, reject)=>{
    let sql = `SELECT * FROM usuarios WHERE usuarios= '${usuario}' `
    this.conexao.query(sql, function(erro,retorno){
        if(erro){
            console.debug(erro)
            reject([400, erro])

        }else{
            console.debug(retorno)
            if(retorno.length === 0){
                resolve([401, "Usuario ou senha invalido"])    
            }else{
                let hash =  retorno[0].senha
                let logado = bcrypt.compareSync(senha, hash);
                if (logado){ 
                    let {usuario_id, usuario_tipo} = retorno[0]
                resolve([200, "Logado",usuario_id, usuario_tipo])
             }else{
             
            resolve([401, 'Usuario ou senha invalido '])
             }
        }

    }



    })
})

}
}


module.exports = new usuario()