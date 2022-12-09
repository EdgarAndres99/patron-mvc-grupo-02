const express = require('express')

// Crear un enrutador
const router = express.Router()

// Envio de archivos estáticos
router.get('/', (req, res, next) => {
  console.log('Request to /')
  res.sendFile('index.html')
})

router.get('/index', (req, res, next) => {
  console.log('Request to /index')
  res.sendFile('index.html')
})

// Definir rutas de controladores
router.use('/dev', require('../controllers/developer.js'))

module.exports = router
