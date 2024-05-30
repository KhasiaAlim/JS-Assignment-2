// TASK-2 (PART-1) //

const quiz1 = +prompt('Enter the first Integer: ');
const quiz2 = +prompt('Enter the second Integer: ');

if (quiz1 > quiz2) {
    alert(quiz1 + ' is larger than ' + quiz2);
    document.write(quiz1 + ' is larger than ' + quiz2, '<br/>');
}
else if (quiz1 < quiz2) {
    alert(quiz2 + ' is larger than ' + quiz1);
    document.write(quiz2 + ' is larger than ' + quiz1, '<br/>');
}
else if (quiz1 === quiz2) {
    alert('Both Intergers are equal');
    document.write('Both Intergers are equal', '<br/>');
}

// TASK-2 (PART-2) //

const quiz3 = +prompt('Enter any number: ');

if (quiz3 > 0) {
    alert(quiz3 + ' is a positive number');
    document.write(quiz3 + ' is a positive number', '<br/>');
}
else if (quiz3 < 0) {
    alert(quiz3 + ' is a negative number');
    document.write(quiz3 + ' is a negative number', '<br/>');
}
else {
    alert('The number is zero');
    document.write('The number is zero', '<br/>');
}

// TASK-2 (PART-3) //

const vowel = prompt('Enter any character: ');

if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
    alert('It is a vowel');
    document.write('It is a vowel', '<br/>');
}
else {
    alert('It is not a vowel');
    document.write('It is not a vowel', '<br/>');
}

// ---------------------- //


