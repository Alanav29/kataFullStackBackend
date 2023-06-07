const express = require('express');
const router = express.Router();
const { getTareas, postTarea, updateTarea, deleteTarea } = require('../controllers/tareasControllers');

router.get('/', getTareas)

router.post('/', postTarea)

router.put('/:id', updateTarea)

router.delete('/:id', deleteTarea)

module.exports = router