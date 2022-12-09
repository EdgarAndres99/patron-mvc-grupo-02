const Datastore = require('nedb') // Base de datos en memoria
const developerData = require('../data/developers.json') 
module.exports = (app) => {
  const db = {} // Crea un objeto vacío
  db.developers = new Datastore()
  db.developers.loadDatabase()
  db.developers.insert(developerData)
  app.locals.developers = db.developers.find(developerData)
}
