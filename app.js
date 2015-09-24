// REQUIREMENTS //
var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')

// CONFIG //

// serve js & css files into a public folder
app.use(express.static(__dirname + '/public'))

// body parser config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// DATA //

// pre-seeded food data
var foods =[
  {id: 0, name: "Sushiritto", yumminess: "quite"},
  {id: 1, name: "Green Eggs & Ham", yumminess: "sure"},
  {id: 2, name: "Crayfish", yumminess: "depending"},
  {id: 3, name: "Foie Gras", yumminess: "omg"},
  {id: 4, name: "Kale", yumminess: "meh"}
]



// ROUTES //

// root path
app.get("/", function (req, res) {
  // render index.html
  res.sendFile(path.join(__dirname + '/public/views/index.html'))
})

//INDEX
// foods index path
app.get("/foods", function (req, res) {
  // render foods index as JSON
  res.json(foods)

})

//CREATE
app.post("/foods", function (req, res) {

  res.json(req.body)
  var jsonResponse = req.body
  foods.push(jsonResponse)


  // add a unique id
  // add new food to DB (array, really...)
  // send a response with newly created object
})

//DELETE
app.delete("/foods/:id", function (req, res) {
  console.log("hitting delete route");
  var position
  for (var i = 0; i < foods.length -1; i++){
    foods[i].id.toString() === req.params.id ? position = i : position 
    console.log(foods[i]);
  }
  res.json(foods[i])
  foods.splice(position, 1)
  

  // finding an object with id = req.body.id out of the foods
  // remove item from array
  // render deleted object
})

// listen on port 3000
app.listen(3000, function (){
  console.log("listening on port 3000")
})