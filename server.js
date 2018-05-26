var express = require('express')
var mongoose = require('mongoose')
var http = require('http')
var parser = require('body-parser')
var Schema = mongoose.Schema

var app = express()
mongoose.connect('')
var db = mongoose.connection
var userSchema = new Schema({
  name: String,
  email: String,
  password: String
})
var User = mongoose.model('User', userSchema)


app.use(parser.json())
app.use(express.static('./public'))
app.get('/users', function(req, res) {
  console.log("Serving request type GET")
  console.log('Request from:', __dirname)
  var stringified
  User.find({}, function(error, users) {
    if (error) console.log(error)
    res.end(JSON.stringify(users))
  })
})
app.get('/favicon.ico', function(req, res) {
  res.sendFile('./1397485569_00001_icosahedron.obj.png')
})
app.post('/users', function(req, res) {
  console.log("Serving request type POST for url", req.url)
  console.log("Object being sent is a(n)", typeof req.body)
  console.log(req.body)
  console.log("Object contains:", req.body.password)
  if (req.body.password) {
    var newCustomer = new User(req.body)
    newCustomer.save((err, newCustomer) => {
      if (err) console.log(err)
      console.log("New Customer\n", newCustomer)
    })
    res.end()
  }
})
http.createServer(app).listen(8888)
