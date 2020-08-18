$(document).ready(function() {
  $("#puzzle-form").submit(function(event) {
    event.preventDefault();
    const userInput = $("input#sentence").val();
    const splitSentence = userInput.split("");
    // console.log(splitSentence);
    const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    for(let i = 0; i <= splitSentence.length; i++) {
      if(vowel.includes(splitSentence[i])) {
        splitSentence[i] = ("-");
      }
    }
    newSentence = splitSentence.join("");
    console.log(newSentence);
    $("#outputSentence").text(newSentence);
    $("#puzzle-form").hide();
    $("#results").show();

  });
});