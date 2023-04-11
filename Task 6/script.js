// Function to find the n most common characters in a string
function findMostPopularVacationCities(str, n) {
    // Create an object to store the frequency of each character
    const charFrequency = {};
  
    // Iterate through the string and update the frequency of each character in the object
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charFrequency[char]) {
        charFrequency[char]++;
      } else {
        charFrequency[char] = 1;
      }
    }
  
    // Convert the object into an array of key-value pairs and sort it by frequency in descending order
    const sortedCharFrequency = Object.entries(charFrequency).sort((a, b) => b[1] - a[1]);
  
    // Map the array to contain only the characters and slice the first n
    const mostCommonChars = sortedCharFrequency.map(pair => pair[0]).slice(0, n);
  
    // Return the array of most common characters
    return mostCommonChars;
  }
  
  // DOM manipulation to update the output box with the most common characters
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const inputString = document.querySelector('#text-input').value;
    const inputNumber = document.querySelector('#number-input').value;
    const outputBox = document.querySelector('#output-box');
    outputBox.textContent = findMostPopularVacationCities(inputString, inputNumber).join(', ');
  });