import jsonwebtoken from "jsonwebtoken"
import "dotenv/config"

export function generarToken(id){
    return jsonwebtoken.sign({id},process.env.token_secreto,{expiresIn: "1d"})
}

export function verificarToken(req,res,next){
    const {token} =req.cookies
    if(!token){
        return res.status(401).json({error:"No se ha encontrado un token"})
    }
    try {
        const dataToken= jsonwebtoken.verify(token,process.env.token_secreto)
        req.idAutenticado=dataToken.id
        next()
    } catch (error) {
        res.status(404).json({error:"Token no valido"})
    }
}