$(document).ready(function() {
  $("#puzzle-form").submit(function(event) {
    event.preventDefault();

    const inputSentence = $("input#sentence").val();
    const splitSentence = inputSentence.split("");
    // console.log(splitSentence);
  });
});