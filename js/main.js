$(document).ready(function() {
  $("#puzzle-form").submit(function(event) {
    event.preventDefault();
    const userInput = $("input#sentence").val();
    // console.log(userInput)
  });
});

// const inputSentence = $("input#sentence").val();
//     const splitArray = inputSentence.split("");
//     const vowel = ["a", "e", "i", "o", "u"];
//     let newArray = [];

//     for(let i = 0; i < splitArray.length; i++) {
//       for(let j = 0; j < vowel.length; j++) {
//         if(splitArray[i] === vowel[j]) {
//           newArray.push("-");
//         }
//       }
//     }