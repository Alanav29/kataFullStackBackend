const asyncHandler = require('express-async-handler');

const getTareas = asyncHandler( async (req, res) => {
    res.status(200).json({message : 'Obtener las tareas'})
});

const postTarea = asyncHandler( async (req, res) => {
    if(!req.body.texto){
        // res.status(400).json({message : 'Porfavor agrega texto'})
        throw new Error('Porfavor agrega texto')
    }
    res.status(201).json({message : 'Crear tarea'})
});

const updateTarea = asyncHandler( async (req, res) => {
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