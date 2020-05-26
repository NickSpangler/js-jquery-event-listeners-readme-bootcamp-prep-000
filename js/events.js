//define functions here
function getIt() {
  $("p").on("click", function() {
    alert("Hey!")
  })
}

function frameIt() {
  $("img").on("load", function() {
    img.classList.add("tasty")
  })
}

pressIt() {
  $("input").on("keydown", function(){
   if (key.which == 71) {
     alert("g was pressed")
   }
  })
}


$(document).ready(function(){

// call functions here

});
