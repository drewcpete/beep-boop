// Front end logic
$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    var origNum = $("input#numberInput").val();
        debugger;
    console.log(origNum);

    var numArray = [];
    numArray = origNum;
    numArray = numArray.split("");
    var output = [];

    for (var i = 0; i <= numArray.length; i++) {
      if (numArray[i] == 1) {
        output.append("Beep!")
      } else if (numArray[i] == 2) {
        output.append("Boop!")
      } else if (numArray[i] == 3) {
        output.append("I'm sorry, Ben or Elly. I'm afraid I can't do that.")
      }
    }
    $("p#textOutput").text(output);


  })
})


// Business Logic
