// Business Logic
var origNum = $("input#numberInput").val();

var numArray = origNum.split("");

var output = ""
// Front end logic
$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    for (var i = 0; i <= numArray.length; i++) {
      if (numArray[i] == 1) {
        output.text("Beep!")
      } else if (numArray[i] == 2) {
        output.text("Boop!")
      } else if (numArray[i] == 3) {
        output.text("I'm sorry, Ben or Elly. I'm afraid I can't do that.")
      }
    }

  })
})
