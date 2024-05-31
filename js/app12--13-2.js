// TASK-2 (PART-1) //

const quiz1 = +prompt('Enter the first Integer: ');
const quiz2 = +prompt('Enter the second Integer: ');

if (quiz1 > quiz2) {
    alert(quiz1 + ' is larger than ' + quiz2);
    document.write(quiz1 + ' is larger than ' + quiz2, '<br/>');
    console.log(quiz1 + ' is larger than ' + quiz2);
}
else if (quiz1 < quiz2) {
    alert(quiz2 + ' is larger than ' + quiz1);
    document.write(quiz2 + ' is larger than ' + quiz1, '<br/>');
    console.log(quiz2 + ' is larger than ' + quiz1);
}
else if (quiz1 === quiz2) {
    alert('Both Intergers are equal');
    document.write('Both Intergers are equal', '<br/>');
    console.log('Both Intergers are equal');
}

// TASK-2 (PART-2) //

const quiz3 = +prompt('Enter any number: ');

if (quiz3 > 0) {
    alert(quiz3 + ' is a positive number');
    document.write(quiz3 + ' is a positive number', '<br/>');
    console.log(quiz3 + ' is a positive number');
}
else if (quiz3 < 0) {
    alert(quiz3 + ' is a negative number');
    document.write(quiz3 + ' is a negative number', '<br/>');
    console.log(quiz3 + ' is a negative number');
}
else {
    alert('The number is zero');
    document.write('The number is zero', '<br/>');
    console.log('The number is zero');
}

// TASK-2 (PART-3) //

const vowel = prompt('Enter any character: ');

if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
    alert('It is a vowel');
    document.write('It is a vowel', '<br/>');
    console.log('It is a vowel');
}
else {
    alert('It is not a vowel');
    document.write('It is not a vowel', '<br/>');
    console.log('It is not a vowel');
}

// ---------------------- //


