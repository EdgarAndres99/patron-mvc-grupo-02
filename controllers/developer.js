const express = require('express')
const api = express.Router()

const find = require('lodash.find')
const notfoundstring = 'No se encontró el desarrollador con id:'

// Obtener todos
api.get('/buscarTodos', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const data = req.app.locals.developers.query
  res.send(JSON.stringify(data))
})

// Obtener por id
api.get('/buscarPorId/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const id = parseInt(req.params.id)
  const data = req.app.locals.developers.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.send(JSON.stringify(item))
})

module.exports = api
