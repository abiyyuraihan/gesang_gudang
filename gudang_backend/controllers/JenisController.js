import Jenis from "../models/JenisModel";

export const getJenis = async(req, res) =>{
    try {
        const response = await Jenis.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}

export const getJenisById = async(req, res) =>{
    try {
        const response = await Jenis.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}

export const createJenis = async(req, res) =>{
    try {
        await Jenis.create(req.body)
        res.status(201).json({msg: "Jenis Created"});
    } catch (error) {
        console.log(error.massage);
    }
}

export const updateJenis = async(req, res) =>{
    try {
        await Jenis.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Jenis Updated"});
    } catch (error) {
        console.log(error.massage);
    }
}

export const deleteJenis = async(req, res) =>{
    try {
        await Jenis.destroy( {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Jenis Deleted"});
    } catch (error) {
        console.log(error.massage);
    }
}