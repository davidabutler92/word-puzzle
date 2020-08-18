$(document).ready(function() {
  $("#puzzle-form").submit(function(event) {
    event.preventDefault();

    const inputSentence = $("input#sentence").val();
    const splitSentence = inputSentence.split("");
    // console.log(splitSentence);
    const vowel = ["a", "e", "i", "o", "u"];
    let newArray = [];

    for(let i = 0; i < splitSentence.length; i++) {
      for(let j = 0; j < vowel.length; i++) {
        if(splitSentence);
      }
    }

  });
});