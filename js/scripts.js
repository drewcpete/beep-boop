// Business Logic
var outArray = []

function compTalk(origNum) {

// before using the includes method, I tried setting i == "1"
  for (var i = 0; i <= origNum; i+= 1) {
    console.log(typeof(i));
    if ([i] == "3") {
      console.log(i);
      outArray.push("I'm sorry, Ben or Elly. I'm afraid I can't do that.");
      console.log(outArray);
      return true;
    } else if ([i] == "2") {
      console.log(i);
      outArray.push("Boop!");
      console.log(outArray);
      return true;
    } else if ([i] == "1") {
      console.log(i);
      outArray.push("Beep!");
      console.log(outArray);
      return true;
    }
    else {
      outArray.push(i)
    }
  }
  return outArray;
  console.log(outArray);
};


// Front end logic
$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var origNum = $("input#numberInput").val().split([]);
    console.log(origNum);

    var finished = compTalk(origNum);
    console.log(finished);
    finished = finished.join(", " + "")
    $("p#textOutput").text(finished);


  })
});
