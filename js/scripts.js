// Business Logic
function compTalk(numInput){
  var outArray = [];
// debugger;
  for (var i = 0; i <= outArray; i++) {
    if (i.toString() == "3") {
      outArray.push("I'm sorry, Ben or Elly. I'm afraid I can't do that.");
    } else if (i.toString() == "2") {
      outArray.push("Boop!");
    } else if (i.toString() == "1") {
      outArray.push("Beep!");
    }
  }
  return outArray;
};


// Front end logic
$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var origNum = parseInt($("input#numberInput").val());

    console.log(origNum);
    var finished = compTalk(origNum);
    console.log(finished);
    $("p#textOutput").text(finished);


  })
});
