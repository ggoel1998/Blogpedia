const express = require('express')
const hbs = require('hbs')  //used for hbs rendering
const path = require('path') //used to require path file which helps us to join path in line 17

const { db } = require('./db/models')
const app = express()

hbs.registerPartials(path.join(__dirname, '/views/partials')) //check notes.log for partials
// hbs.registerHelper(path.join(__dirname,'/views/helpers'))

app.set('view engine', 'hbs') // engine to run hbs

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api', require('./routes/api')) //route for api
app.use('/', require('./routes/pages'))  // route for pages
app.use('/', express.static(path.join(__dirname, '/public'))) 

const PORT = process.env.PORT || 9988


db.sync().then(() => {
  app.listen(PORT, () => {
    console.log('http://localhost:9988')
  })
}).catch(console.error)            