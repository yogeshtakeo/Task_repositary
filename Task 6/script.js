//Count character freuency in the input string
function countChars(str) {
  const charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}
//Get the most common characters
function getMostCommonChars(charMap, num) {
  const charArray = Object.entries(charMap);
  const sortedChars = charArray.sort((a, b) => b[1] - a[1]);
  const mostCommonChars = sortedChars.slice(0, num);
  return mostCommonChars;
}
//Update output box with most common characters
function updateOutputBox(chars) {
  const outputBox = document.querySelector("#output-box");
  outputBox.innerHTML = "";
  for (let char of chars) {
    const charDiv = document.createElement("div");
    charDiv.textContent = `${char[0]} (${char[1]})`;
    outputBox.appendChild(charDiv);
  }
}
//Event listner for submit form
const form = document.querySelector("#input-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputString = document.querySelector("#input-string").value;
  const numChars = document.querySelector("#num-chars").value;
  const charMap = countChars(inputString);
  const mostCommonChars = getMostCommonChars(charMap, numChars);
  updateOutputBox(mostCommonChars);
});
