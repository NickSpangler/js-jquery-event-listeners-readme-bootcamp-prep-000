//define functions here
function getIt() {
  $("p").on("click", function() {
    alert("Hey!")
  })
}

function frameIt() {
  $("img").on("load", function() {
    var minion = $("img")
    minion[0].classList.add("tasty")
  })
}

function pressIt(){
  $("input").on("keydown", function(key){
   if (key.which == 71) {
     alert("g was pressed")
   }
  })
}

function submitIt() {
  $( "#target" ).submit(function( event ) {
  alert( "Handler for .submit() called." );
  event.preventDefault();
});
}


$(document).ready(function(){

// call functions here

});
