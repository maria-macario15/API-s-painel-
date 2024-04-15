const { response } = require("express")
const Usuario = require ("../models/usuario")
const jwt = require ("jsonwebtoken")
const secret = "EU.tentei"


class UsuarioController {
    index(req, res){
        Usuario.MostrarTodos().then(
            resposta=>{
                let usuario_id = resposta[2]
                let usuario_tipo = resposta [3]
                const token = jwt.sign({usuario_id, usuario_tipo},secret,{expiresIn:120})
                res.status(resposta[0]).json({token:token})
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
                let usuario_id = resposta [2]
                let usuario_tipo = resposta [3]
                let token = ""
            if (resposta[0] == 200){
                    token = jwt.sign({usuario_id, usuario_tipo},secret,{expiresIn:120})
            }
                res.status(resposta[0]).json({token:token})
            }
        ).catch(
            resposta=>{
               console.debug(resposta)  
                res.status(resposta[0]).json(resposta[1])
                
    }
    )
    }
    verificarToken(req, res, next){
        const token = req.headers['x-access-token']
        jwt.verify(token, secret, (erro, decoded)=>{
            if(erro){
                return res.status(401).json("Usuario nao autenticando")

            }else{
                req.usuario_id = decoded.usuario_id
                req.usuario_tipo = decoded.usuario_tipo
                console.debug("Id"+ decoded.usuario_id +"Tipo:"+decoded.usuario_tipo)
                next()
            }
        })
    }
}
module.exports = new UsuarioController ()