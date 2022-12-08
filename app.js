const config = require('config')
const express = require('express')
const app = express()

// Use hosting values if available, otherwise default
const environment = process.env.NODE_ENV || 'development'
const hostname = process.env.HOSTNAME || config.get('hostname')
const port = process.env.PORT || 3004

app.use(express.static('public'))

require('./utils/seeder.js')(app)

// Use Express middleware to configure routing
const routing = require('./routes/router.js')
app.use('/', routing)

app.listen(port, hostname, () => {
  console.log('Ejecutando')
})
