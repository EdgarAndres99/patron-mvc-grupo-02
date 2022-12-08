const Datastore = require('nedb') // set up a temporary (in memory) database
const developerData = require('../data/developers.json') // read in data file
module.exports = (app) => {
  const db = {}
  db.developers = new Datastore()
  db.developers.loadDatabase()
  db.developers.insert(developerData)
  app.locals.developers = db.developers.find(developerData)
}
