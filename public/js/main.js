$(document).ready(function() {
console.log('Hello Niall')
//Send ajax GET request
  $.get('http://localhost:3000/foods', function(response) {
    render(response);
  });

})

var form = $('#addFood')
  form.on('submit', function(){
    event.preventDefault()

//Send ajax DELETE request
      $.ajax({
      url: '/foods',
      type: 'post',
      data: form.serialize(),
      success: function(result) {
          render([result])
          console.log(result)
      }
  });
})

function render(response){
  console.log(response)
//build DOM Element
  for (var i = 0; i < response.length ; i++){
    var foodItem = '<li id="' + response[i].id + '">'
    foodItem += '<b>' + response[i].name + '</b>'
    foodItem += ' -- Rateing: ' + '<i>' + response[i].yumminess + '</i>'
    foodItem += '<button id="' + response[i].id +'" name="subject" type="submit" value="' + response[i].id +'">Delete</button><br><br>'
    foodItem += '</li>'
    var id = response[i].id

//call function to add element to DOM
    addToPage(foodItem, id);
  }
}


function addToPage(item, id){
  var results = $('#food-list');
  results.hide().append(item).fadeIn('slow');

  $('#' + id).on('click', function(event){

//Call method to remove record from DB
    removeRecord(this.value, id);
  })



function removeRecord(valueId, id) {
//remove element from DOM
  $('#' + id).slideUp('slow')

//Call Method to delete record from DB
  deleteRecord(id)
  console.log('deleting' + id)
  }


function deleteRecord(id){
//send Ajax request to delete record form db
  $.ajax({
    url: '/foods/' + id,
    type: 'DELETE',
    success: function(result) {
        console.log(result)
    }
  });
}

}