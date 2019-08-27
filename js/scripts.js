/// Business Logic

function compTalk(inputNum) {
  var outArray = [];
  for (var i = 0; i <= inputNum; i++) {
    if (i.toString().includes("3")) {
      outArray.push(" I'm sorry, Ben or Elly. I'm afraid I can't do that.");
    } else if (i.toString().includes("2")) {
      outArray.push(" Boop!");
    } else if (i.toString().includes("1")) {
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
