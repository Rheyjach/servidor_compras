import express from "express"
import { verificarToken } from "../helpers/autenticacion.js"
import comprasControllers from "../controllers/compras_controllers.js"


const routesCompras= express.Router()


routesCompras.get("/",verificarToken,comprasControllers.getAll)
routesCompras.post("/",verificarToken,comprasControllers.create)
routesCompras.put("/:id",verificarToken,comprasControllers.put)
routesCompras.delete("/:id",verificarToken,comprasControllers.deleteOne)
routesCompras.delete("/",verificarToken,comprasControllers.deleteAll)

export default routesCompras;


