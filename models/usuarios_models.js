import Usuario from "../schemas/usuarios_schemas.js"
import mongoose from "mongoose"

class usuariosModels {

    async getOneEmail(email) {
        return await Usuario.findOne({ email })
    }

    async getOneid(id) {
        return await Usuario.findOne({ _id: new mongoose.Types.ObjectId(id) })
    }

    async create(usuario) {
        return await Usuario.create(usuario)
    }

    async delete(id) {
        return await Usuario.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) })
    }
}

export default new usuariosModels();