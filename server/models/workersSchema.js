
const mongoose = require("mongoose");

const workersSchema = mongoose.Schema({
    idEmpleado:{
        type: Number,
        required: true,
    },
    nombre:{
        type: String,
        required: true,
    },
    puesto:{
        type: String,
        required: false,
    },
    enfermedades: {
        type: Array,
        required: false,
    },
    alergias:{
        type: Array,
        required: false,
    },
    tipoSangre: {
        type: String,
        required: false,
    },
    urlImagen: {
        type: String,
        required: false,
    }
},{collection:"workers"})

module.exports = mongoose.model('workers', workersSchema)