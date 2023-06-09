
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: [true, 'Por favor teclea tu nombre']
    },
    email: {
        type: 'string',
        required: [true, 'Por favor teclea tu email'],
        unique: true
    },
    password: {
        type: 'string',
        required: [true, 'Por favor teclea tu password'],
    }
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)