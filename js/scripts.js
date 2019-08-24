/// Business Logic
var outArray = []
function compTalk(inputNum) {

  var outputArray = [];
  for (var i = 0; i <= inputNum; i+= 1) {
    if ([i] == "3") {
      outArray.push(" I'm sorry, Ben or Elly. I'm afraid I can't do that.");
    } else if ([i] == "2" ) {
      outArray.push(" Boop!");
    } else if ([i] == "1" ) {
      outArray.push(" Beep!");
    } else {
      outArray.push(" " + i.toString());
    }
  }
  return outArray;
}

// Front end logic
$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var inputNum = $("input#numberInput").val()

    var finished = compTalk(inputNum);

    $("p#textOutput").text(finished);
  })
});
