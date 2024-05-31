// TASK-2 (PART-1) //

const firstName1 = prompt('Enter your first name:');
const lastName1 = prompt('Enter your last name: ');

const fullName1 = firstName1.concat(' ', lastName1);

alert('Hello! ' + fullName1);
console.log('Hello! ' + fullName1);
document.write('Hello! ' + fullName1, '<br/>')

// TASK-2 (PART-2) //

const word4 = 'Hyderabad';
const replacedWord4 = word4.replace('Hyder', 'Islam');

console.log('City: ' + word4);
console.log('After replacement: ' + replacedWord4);
document.write('City: ' + word4, '<br/>');
document.write('After replacement: ' + replacedWord4, '<br/>');

// TASK-2 (PART-3) //

let message = "Ali and Sami are best friends. They play cricket and football together.";
for (let i = 0; i < message.length; i++) {
    if (message.slice(i, i + 3) === "and") {
        message = message.slice(0, i) + "&" + message.slice(i + 3);
    }
}
document.write(message, '<br/>');
console.log(message);

// TASK-2 (PART-4) //

const string = "472";
const number = parseInt(string);

document.write('Value: ' + string + '<br/>');
console.log('Value: ' + string);
document.write('Type: ' +  typeof string + '<br/>');
console.log('Type: ' +  typeof string);
document.write('Value: ' + number + '<br/>');
console.log('Value: ' + number);
document.write('Type: ' +  typeof number + '<br/>');
console.log('Type: ' +  typeof number);

// TASK-2 (PART-5) //

const userInput1 = prompt('Enter any word: ');
const capitalCase1 = userInput1.toLocaleUpperCase();

document.write('User Input: ' + userInput1 + '<br/>');
console.log('User Input: ' + userInput1);
document.write('Upper Case: ' + capitalCase1 + '<br/>');
console.log('Upper Case: ' + capitalCase1);

// ------------------------- //