import mongoose, { mongo } from "mongoose";

const compraSchema = new mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    precio_unitario: {
        type: Number,
        trim: true,
        required: true,
        min: [0, "El precio unitario no puede ser un numero negativo"]
    },
    cantidad: {
        type: Number,
        trim: true,
        required: true,
        min: [0, "La cantidad no puede ser un numero negativo"]
    },
    categoria: {
        type: String,
        trim: true,
        required: true
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"usuarios_compras",
        required:true
    }
}, { timestamps: true })

export default mongoose.model("compras",compraSchema)