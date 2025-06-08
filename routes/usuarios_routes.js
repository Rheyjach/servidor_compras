import express from "express"
import usuariosControllers from "../controllers/usuarios_controllers.js"
import { verificarToken } from "../helpers/autenticacion.js"

const routesUsuarios=express.Router()


routesUsuarios.post("/login",usuariosControllers.login)
routesUsuarios.post("/register",usuariosControllers.register)
routesUsuarios.get("/profile",verificarToken,usuariosControllers.profile)
routesUsuarios.delete("/profile/delete",verificarToken,usuariosControllers.deleteProfile)
routesUsuarios.delete("/profile/logout",verificarToken,usuariosControllers.logout)

export default routesUsuarios;


