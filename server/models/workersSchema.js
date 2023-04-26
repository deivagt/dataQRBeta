
const mongoose = require("mongoose");

const workersSchema = mongoose.Schema({
    idEmpleado:{
        type: Number,
        required: true,
    },
    fechaDocumento:{
        type: String,
        required: true,
    },
    urlImagen:{
        type: String,
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
    inicioLabores:{
        type: String,
        required: true,
    },
    fechaNacimiento:{
        type: String,
        required: false,
    },
    igss:{
        type: String,
        required: false,
    },
    edad:{
        type: Number,
        required: true,
    },
    estadoCivil:{
        type: String,
        required: false,
    },
    sabeLeer:{
        type: Number,
        required: true,
    },
    sabeEscribir:{
        type: Number,
        required: true,
    },
    numeroCasa:{
        type: String,
        required: false,
    },
    numeroCelular:{
        type: String,
        required: false,
    },
    alcohol:{
        type: Number,
        required: true,
    },
    fuma:{
        type: Number,
        required: true,
    },
    drogas:{
        type: Number,
        required: true,
    },
    alergias:{
        type: Object,
        required: true,
    },
    miscelaneo:{
        type: Object,
        required: true,
    },
    tresMeses:{
        type: Object,
        required: true,
    },
    fichaMedica:{
        type: Array,
        required: true,
    },
},{collection:"workers"})

module.exports = mongoose.model('workers', workersSchema)