const { response } = require("express")
const Usuario = require ("../models/usuario")


class UsuarioController {
    index(req, res){
        Usuario.MostrarTodos().then(
            resposta=>{
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta=>{
                res.status(resposta[0]).json(resposta[1])
                console.debug(resposta)   
            }
            )
        
                }

    show(req, res){
        let {usuario_id} = req.params
        Usuario.MostrarUsuario(usuario_id).then(
            resposta=>{
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta=>{
                res.status(resposta[0]).json(resposta[1])
                console.debug(resposta)   
            }
            )
        
                } 

    

    
    create(req,res){
        let {nome, usuario, senha, usuario_tipo} = req.body
    Usuario.inserir(nome, usuario, senha, usuario_tipo).then(
        resposta=>{
            res.status(resposta[0]).json(resposta[1])
        }
    ).catch(
        resposta=>{
            res.status(resposta[0]).json(resposta[1])
            console.debug(resposta)


}
    )

        }
    logar(req, res){
        let {usuario, senha} = req.body
        Usuario.verificarUsuarioSenha(usuario,senha).then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta=>{
                res.status(resposta[0]).json(resposta[1])
                console.debug(resposta)  
        
    }
    )
    }

}
module.exports = new UsuarioController ()