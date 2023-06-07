const asyncHandler = require('express-async-handler');
const Tarea = require('../models/tareaModel');

const getTareas = asyncHandler( async (req, res) => {
    const tareas = await Tarea.find()
    res.status(200).json({tareas})
});

const postTarea = asyncHandler( async (req, res) => {
    if(!req.body.texto){
        // res.status(400).json({message : 'Porfavor agrega texto'})
        throw new Error('Porfavor agrega texto')
    }

    const tarea = await Tarea.create({
        texto: req.body.texto,
    })

    res.status(201).json({tarea})
});

const updateTarea = asyncHandler( async (req, res) => {
    const tarea = await Tarea.findById(req.params.id);
    if(!tarea){
        response.status(400)
        throw new Error('Tarea no encontrada')
    }

    const tareaUpdated = await Tarea.findByIdAndUpdate(req.params.id, req.body,{new: true})

    res.status(200).json({message : `Modificar la tarea ${req.params.id}`})
});

const deleteTarea = asyncHandler( async (req, res) => {
    res.status(200).json({message : `Borrar la tarea ${req.params.id}`})
});

module.exports = {
    getTareas, 
    postTarea,
    updateTarea,
    deleteTarea
}