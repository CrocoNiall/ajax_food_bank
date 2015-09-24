$(document).ready(function() {
console.log('Hello Niall')

  $.get('http://localhost:3000/foods', function(response) {
    render(response);
  });

})


function render(response){
  console.log(response)
}