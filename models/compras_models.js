import Compra from "../schemas/compras_schemas.js"
import mongoose from "mongoose"


class comprasModels {

    async getAll(idUsuario) {
        return await Compra.find({ user: new mongoose.Types.ObjectId(idUsuario) })
    }
    async create(compra) {
        return await Compra.create(compra)
    }
    async put(id, compra) {
        return await Compra.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, compra, { new: true })
    }
    async deleteOne(id) {
        return await Compra.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) })
    }

    async deleteAll(idUsuario) {
        return await Compra.deleteMany({ user: new mongoose.Types.ObjectId(idUsuario) })
    }

}

export default new comprasModels()