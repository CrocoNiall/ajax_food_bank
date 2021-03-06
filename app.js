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
//sets vars
  var newFood = req.body
  var vals = []

  //puts all id's into array
  for (var i = 0; i < foods.length ; i++){
    vals.push(parseInt(foods[i].id))
  }  

//finds biggest value in array and incraments by 1
  var newIndex = Math.max.apply( Math, vals ) + 1;

//adds a key value pair with new id to the object 
  newFood.id = newIndex

//generates new responce object and adds to new foods array
  res.json(newFood)
  foods.push(newFood)


  // add a unique id
  // add new food to DB (array, really...)
  // send a response with newly created object
})

//DELETE
app.delete("/foods/:id", function (req, res) {
  console.log("hitting delete route");
  var position
  for (var i = 0; i < foods.length ; i++){
    foods[i].id.toString() === req.params.id ? position = i : position 
    console.log('deleting  ' + foods[i]);
  }
  // res.json(foods[position])
  console.log('Item to be deleted ' + position)
  foods.splice(position, 1)
  

  // finding an object with id = req.body.id out of the foods
  // remove item from array
  // render deleted object
})

// listen on port 3000
app.listen(3000, function (){
  console.log("listening on port 3000")
})