// TASK-6 (PART-1) //

const userInput = prompt('Enter any word:');

document.write('User Input: ' + userInput, '<br/>');
console.log('User Input: ' + userInput);

if (userInput !== null && userInput !== "") {
    const wordIndex = userInput.charAt(userInput.length - 1);
    document.write('Last Character of Input: ' + wordIndex, '<br/>');
    console.log('Last Character of Input: ' + wordIndex);
}

// TASK-6 (PART-2) //

const givenString = "The quick brown fox jumps over the lazy dog";
const wordToFind = "the";
const textLower = givenString.toLowerCase();
const wordLower = wordToFind.toLowerCase();

let count = 0;

for (let i = 0; i < textLower.length; i++) {
    if (textLower.slice(i, i + wordLower.length) === wordLower) {
        count++;
    }
}

document.write('Text: ' + givenString, '<br/>');
console.log('Text: ' + givenString);
document.write(`There are ${count} occurrence(s) of word '${wordToFind}': `);
console.log(`There are ${count} occurrence(s) of word '${wordToFind}' `);

// -------------------------- //