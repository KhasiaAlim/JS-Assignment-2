// TASK-3 (PART-1) //

const userInput = prompt('Enter any word:')
const titleCase = userInput.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

document.write('User Input: ' + userInput + '<br/>');
console.log('User Input: ' + userInput);
document.write('Upper Case: ' + titleCase + '<br/>');
console.log('Upper Case: ' + titleCase);

// TASK-3 (PART-2) //

const num = 35.36;
const string1 = num.toString();
const string2 = string1.replace('.', '');

document.write('Number: ' + num, '<br/>');
console.log('Number: ' + num);
document.write('Result: ' + string2, '<br/>');
console.log('Result: ' + string2);

// TASK-3 (PART-3) //

let specialSymbols = ['@', '.', ',', '!'];
let username = prompt('Enter your username:');
let found1 = false

for (let i = 0; i < username.length; i++) {
    if (specialSymbols.includes(username[i])) {
        username = alert("Enter a valid username without special symbols [@, ., ,, !]:");
        console.log('Invalid username!');
        document.write('Invalid username!');
        found1 = true
    }
}

if (!found1) {
    console.log('Valid username: ' + username);
    document.write('Valid username: ' + username, '<br/>');
}

// TASK-3 (PART-4) //

const A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
const B = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

let found2 = false;

for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === B) {
        found2 = true;
        alert(B.toLowerCase() + ' is available at index ' + i + ' in our bakery');
        document.write(B.toLowerCase() + ' is available at index ' + i + ' in our bakery');
        break;
    }
}

if (!found2) {
    alert('We are Sorry! ' + B.toLowerCase() + ' is not available in our bakery');
    document.write('We are Sorry! ' + B.toLowerCase() + ' is not available in our bakery');
}

// -------------------------- //
