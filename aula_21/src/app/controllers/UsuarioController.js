const usuario = require("../models/usuario")
class UsuarioController{
 
   

    //Inserindo uma imagem
    create(req,res){
        let login = req.body.login
        let cargo = req.body.cargo
        let senha = req.body.senha
        console.debug("teste")
        
        usuario.inserir(login,cargo, senha).then(
            resposta=>{
               res.status(resposta[0]).json("inserido")
            }   
           ).catch(
            resposta=>{
                    console.debug(resposta)
                res.status(resposta[0]).json("ERRO:"+ resposta[1].errno)
            }
           )
           }
          
        excluir(req,res){
            let id = req.params.id
            usuario.delete(id).then(
                resposta=>{
                   res.status(resposta[0]).json("deletado")
                }   
               ).catch(
                resposta=>{
                        console.debug(resposta)
                    res.status(resposta[0]).json("ERRO:"+ resposta[1].errno)
                }
               )
               }
        
        visualizar(req,res){
            usuario.ler().then(
            resposta=>{
            res.status(resposta[0]).json(resposta[1])
         }   
        ).catch(
         resposta=>{
                 console.debug(resposta)
             res.status(resposta[0]).json("ERRO:"+ resposta[1].errno)
         }
        )
        }
            
    
            atualizar(req,res){
                let id = req.params.id
                usuario.up(id).then(
                resposta=>{
                res.status(resposta[0]).json(resposta[1])
             }   
            ).catch(
             resposta=>{
                     console.debug(resposta)
                 res.status(resposta[0]).json("ERRO:"+ resposta[1].errno)
             }
            )
            }
                }

module.exports = new UsuarioController()