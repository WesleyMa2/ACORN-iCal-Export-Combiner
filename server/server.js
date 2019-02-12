const express = require('express')
const path = require('path')
const helmet = require('helmet')
const bodyParser = require('body-parser');
const multer  = require('multer')
const combiner = require('./combiner')

const app = express()
const upload = multer()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet())

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   next()
// })


app.use(express.static(path.join(__dirname, '../build')));

// An api endpoint that returns a short list of items
app.post('/getSchedule', upload.array('icsFile'),(req, res) => {
  combiner.combineCals(req.files, req.body.target, req.body.owners)
  res.send("TEST")
})

// Handles any requests that don't match the ones above
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log('App is listening on port ' + port)
