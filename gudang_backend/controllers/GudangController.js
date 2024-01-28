import Gudang from "../models/GudangModel.js";

export const getGudang = async(req, res) =>{
    try {
        const response = await Gudang.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}

export const getGudangById = async(req, res) =>{
    try {
        const response = await Gudang.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}

export const createGudang = async(req, res) =>{
    try {
        await Gudang.create(req.body)
        res.status(201).json({msg: "Gudang Created"});
    } catch (error) {
        console.log(error.massage);
    }
}

export const updateGudang = async(req, res) =>{
    try {
        await Gudang.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Gudang Updated"});
    } catch (error) {
        console.log(error.massage);
    }
}

export const deleteGudang = async(req, res) =>{
    try {
        await Gudang.destroy( {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Gudang Deleted"});
    } catch (error) {
        console.log(error.massage);
    }
}