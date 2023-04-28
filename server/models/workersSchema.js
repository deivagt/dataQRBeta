
const mongoose = require("mongoose");

const workersSchema = mongoose.Schema({
    idEmpleado:{
        type: Number,
        required: true,
    },
    tipoDoc:{
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
    personal:{
        type: Object,
        required: true,
    },
    miscelaneo:{
        type: Object,
        required: true,
    },
    seguridadIndustral:{
        type: Object,
        required: true,
    },
    tresMeses:{
        type: Object,
        required: true,
    },
    saludPrincipal:{
        type: Object,
        required: true,
    },
    fichaMedica:{
        type: Array,
        required: true,
    },
},{collection:"workers"})

module.exports = mongoose.model('workers', workersSchema)