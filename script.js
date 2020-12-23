//JavaScript Function for String Reversal

function strReverse() {
  let reversedString = "";

  let str = document.getElementById("userInput").value;

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString = reversedString + str[i];
  }

  document.getElementById("output").innerHTML =
    "Reversed string is: " + reversedString;
}
