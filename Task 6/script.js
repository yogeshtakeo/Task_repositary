const form = document.querySelector('form');
const stringInput = document.querySelector('#string-input');
const numberInput = document.querySelector('#number-input');
const outputBox = document.querySelector('#output-box');

// Define function to calculate most common characters

const getMostCommonCharacters= (string, n) =>{
	// Create empty object to store character frequencies
	const charFrequency = {};
	
	// Iterate through string and count character frequencies
	for (const char of string) {
		if (charFrequency[char]) {
			charFrequency[char]++;
		} else {
			charFrequency[char] = 1;
		}
	}
	
	// Transform object into array of key-value pairs, sorted by frequency
	const sortedChars = Object.entries(charFrequency)
		.sort((a, b) => b[1] - a[1])
		.map(pair => pair[0])
		.slice(0, n);
	
		// Return array of most common characters
	return sortedChars;
}

// Define event listener for form submission
form.addEventListener('submit', event => {
	event.preventDefault(); // prevent default form submission behavior
	
	const string = stringInput.value;
	const n = numberInput.value;
	
	// Validate input
	if (string === '' || isNaN(n) || n < 1) {
		outputBox.textContent = 'Please enter a valid string and number.';
		return;
	}
	
	// Calculate most common characters
	const mostCommon = getMostCommonCharacters(string, n);
	
	// Update output box with results
	outputBox.innerHTML = `
		<h2>Most Common Characters</h2>
		<p>String: ${string}</p>
		<p>Number: ${n}</p>
		<p>Characters: ${mostCommon.join(', ')}</p>`;
});