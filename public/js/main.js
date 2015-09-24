$(document).ready(function() {
console.log('Hello Niall')

  $.get('http://localhost:3000/foods', function(response) {
    render(response);
  });

})

var form = $('#addFood')
  form.on('submit', function(){
    event.preventDefault()


      $.ajax({
      url: '/foods',
      type: 'post',
      data: form.serialize(),
      success: function(result) {
          render([result])
      }
  });

})



function render(response){
  console.log(response)

  for (var i = 0; i < response.length ; i++){
    var foodItem = '<li id="' + response[i].id + '">'
    foodItem += '<b>' + response[i].name + '</b>'
    foodItem += ' Rateing: ' + '<i>' + response[i].yumminess + '</i>'
    foodItem += '<button id="' + response[i].id +'" name="subject" type="submit" value="' + response[i].id +'">Delete</button><br><br>'
    foodItem += '</li>'
    var id = response[i].id
    console.log(foodItem)
    addToPage(foodItem, id);
  }
}


function addToPage(item, id){
  var results = $('#food-list');
  results.hide().append(item).fadeIn('slow');
  console.log(id)
  $('#' + id).on('click', function(event){
    
    removeRecord(this.value, id);
  })



function removeRecord(valueId, id) {
  $('#' + id).slideUp('slow')
  deleteRecord(id)
  console.log(id)
  }


function deleteRecord(id){
  $.ajax({
    url: '/foods/' + id,
    type: 'DELETE',
    success: function(result) {
        console.log(result)
    }
});
}





}