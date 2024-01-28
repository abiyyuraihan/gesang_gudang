import express from "express"

import {
    getJenis,
    getJenisById,
    createJenis,
    updateJenis,
    deleteJenis
} from "../controllers/JenisController.js"

const router = express.Router()

router.get('/jenis', getJenis)
router.get('/jenis/:id', getJenisById)
router.post('/jenis', createJenis)
router.patch('/jenis/:id', updateJenis)
router.delete('/jenis/:id', deleteJenis)

export default router;