import comprasModels from "../models/compras_models.js"

class comprasControllers {

    async getAll(req, res) {
        try {
            const data = await comprasModels.getAll(req.idAutenticado)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async create(req, res) {
        try {
            const { nombre, precio_unitario, cantidad, categoria } = req.body
            const data = await comprasModels.create({
                nombre,
                precio_unitario,
                cantidad,
                categoria,
                user: req.idAutenticado
            })
            res.status(201).json(data)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async put(req, res) {
        try {
            const { id } = req.params
            const data = await comprasModels.put(id, req.body)
            if (!data) {
                throw new Error("Compra no encontrada");

            }
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async deleteOne(req, res) {
        try {
            const { id } = req.params
            const data = await comprasModels.deleteOne(id)
            if (!data) {
                throw new Error("Compra no encontrada");

            }
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async deleteAll(req, res) {
        try {
            const data = await comprasModels.deleteAll(req.idAutenticado)
            if (data.deletedCount ===0) {
                return res.status(401).json({error:"No habia datos que eliminar"})
            }
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

export default new comprasControllers()