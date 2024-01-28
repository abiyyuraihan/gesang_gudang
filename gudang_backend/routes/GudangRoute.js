import express from "express"

import {
    getGudang,
    getGudangById,
    createGudang,
    updateGudang,
    deleteGudang
} from "../controllers/GudangController.js"

const router = express.Router()

router.get('/gudang', getGudang)
router.get('/gudang/:id', getGudangById)
router.post('/gudang', createGudang)
router.patch('/gudang/:id', updateGudang)
router.delete('/gudang/:id', deleteGudang)

export default router;