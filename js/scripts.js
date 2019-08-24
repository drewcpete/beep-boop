// Business Logic

var outArray = []

function compTalk(origNum) {
  for (var i = 0; i < origNum; i++) {
    console.log(typeof(i));
    console.log(outArray);
    if (i.toString().includes("3")) {
      console.log(i);
      outArray.push("I'm sorry, Ben or Elly. I'm afraid I can't do that.");

      console.log(outArray);

    } else if (i.toString().includes("2")) {
      console.log(i);
      outArray.push("Boop!");

      console.log(outArray);

    } else if (i.toString().includes("1")) {
      console.log(i);
      outArray.push("Beep!")
    } else {
      return i.toString();
    }
  };
  return outArray;
};

// Front end logic
$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var origNum = $("input#numberInput").val().split([]);

    var finished = compTalk(origNum);
    // console.log(finished);
    // finished = finished.join(", ")
    $("p#textOutput").text(finished);
  })
});
