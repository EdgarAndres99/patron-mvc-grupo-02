const mongoose = require('mongoose')

const DesarrolladorSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false
  },
  apellido: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false
  },
  ciudad: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true
  },
  provincia: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true
  }
})
module.exports = mongoose.model('Developer', DesarrolladorSchema)
