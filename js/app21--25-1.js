// TASK-1 (PART-1) //

const firstName = prompt('Enter your first name:');
const lastName = prompt('Enter your last name: ');

const fullName = firstName + ' ' + lastName;

alert('Hello! ' + fullName);
console.log('Hello! ' + fullName);
document.write('Hello! ' + fullName, '<br/>')

// TASK-1 (PART-2) //

const favPhone = prompt('Enter your favorite mobile phone model:');
document.write('My favourite Phone is: ' + favPhone, '<br/>');
console.log('My favourite Phone is: ' + favPhone);

const lengthString = favPhone.length;
document.write('Length of String: ' + lengthString, '<br/>')
console.log('Length of String: ' + lengthString);

// TASK-1 (PART-3) //

const word1 = 'Pakistan';

document.write('String: ' + word1, '<br/>');
console.log('String: ' + word1);

const word1Index = word1.indexOf('n');
document.write("Index of 'n': " + word1Index, '<br/>');
console.log("Index of 'n': " + word1Index);

// TASK-1 (PART-4) //

const word2 = 'Hello World';

document.write('String: ' + word2, '<br/>');
console.log('String: ' + word2);

const word2Index = word2.lastIndexOf('l');
document.write("Index of 'l': " + word2Index, '<br/>');
console.log("Index of 'l': " + word2Index);

// TASK-1 (PART-5) //

const word3 = 'Hello World';

document.write('String: ' + word3, '<br/>');
console.log('String: ' + word3);

const word3Index = word3.charAt(3);
document.write("Character at Index 3: " + word3Index, '<br/>');
console.log("Character at Index 3: " + word3Index);

// ------------------------ //