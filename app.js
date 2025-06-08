import express from "express"
import "dotenv/config"
import cors from "cors"
import cookieParser from "cookie-parser"
import routesUsuarios from "./routes/usuarios_routes.js"
import routesCompras from "./routes/compras_routes.js"
import dataBase from "./config/dataBase.js"



const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))
app.use(cookieParser())
app.use("/compras/usuarios",routesUsuarios)
app.use("/compras/funcionalidades",routesCompras)
app.get("/", (req, res) => {
  res.send("Backend funcionando correctamente");
});


try {
    const port = process.env.port || 3000
    app.listen(port, () => console.log(`Conectado en el puerto ${port}`))
} catch (error) {
    console.error(`No se pudo conectar al servidor: ${errpor.message}`)
}

process.on("SIGINT", async ()=> {
    await dataBase.desconectarDataBase()
    process.exit(0)
})