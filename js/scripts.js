// Business Logic
var outArray = []

function compTalk(origNum) {

// debugger;
  for (var i = 0; i <= origNum; i++) {
    if (i == 3) {
      outArray.push("I'm sorry, Ben or Elly. I'm afraid I can't do that.");
    } else if (i == 2) {
      outArray.push("Boop!");
    } else if (i == 1) {
      outArray.push("Beep!");
    }
  }
  return outArray;
  console.log(outArray);
};


// Front end logic
$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var origNum = $("input#numberInput").val().split("");

    console.log(origNum);
    var finished = compTalk(origNum);
    console.log(finished);
    $("p#textOutput").text("finished" + finished);


  })
});
