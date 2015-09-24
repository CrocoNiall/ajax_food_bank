$(document).ready(function() {
console.log('Hello Niall')

  $.get('http://localhost:3000/foods', function(response) {
    render(response);
  });



})



function render(response){
  console.log(response)

  for (var i = 0; i < response.length -1; i++){
    var foodItem = '<li data-id=' + response[i].id + '>'
    foodItem += '<b>' + response[i].name + '</b>'
    foodItem += ' Rateing: ' + '<i>' + response[i].yumminess + '</i>'
    foodItem += '</li>'
    foodItem += '<button class="deleteButton" name="subject" type="submit" value="' + response[i].id +'">Delete</button><br><br>'
    console.log(foodItem)
    addToPage(foodItem);
  }
}


function addToPage(item){
  var results = $('#food-list');
  results.hide().append(item).fadeIn('slow');

  $('.deleteButton').on('click', function(event){

    deleteRecord(this.value);
  })

}