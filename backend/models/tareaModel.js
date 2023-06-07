const mogoose = require('mogoose');

const tareaSchema = mongoose.Schema({
    tarea: {
        type: String,
        required: [true,'Por favor escribe una tarea']
    }
},
{
    timestamps: true
})