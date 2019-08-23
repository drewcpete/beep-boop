// Business Logic
function compTalk(origNum){
  var outArray = origNum
// debugger;
  for (var i = 0; i <= outArray; i++) {
    if (outArray[i] == "3") {
      console.log(outArray);
      outArray.push("I'm sorry, Ben or Elly. I'm afraid I can't do that.");
    } else if (outArray[i] == "2") {
      outArray.push("Boop!");
    } else if (outArray[i] == "1") {
      outArray.push("Beep!");
    }
  }
  return outArray;
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
