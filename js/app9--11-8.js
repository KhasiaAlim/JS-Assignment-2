// TASK-8 (PART-1) //

const quiz1 = +prompt('Enter the first number: ');
const quiz2 = +prompt('Enter the second number: ');
const quiz3 = prompt('Enter the operation (+, -, *, /, %): ');

if (quiz3 === '+') {
    alert('Result: ' + (quiz1 + quiz2));
    document.write('Result: ' + (quiz1 + quiz2));
}
else if (quiz3 === '-') {
    alert('Result: ' + (quiz1 - quiz2));
    document.write('Result: ' + (quiz1 - quiz2));
}
else if (quiz3 === '*') {
    alert('Result: ' + (quiz1 * quiz2));
    document.write('Result: ' + (quiz1 * quiz2));
}
else if (quiz3 === '/') {
    alert('Result: ' + (quiz1 / quiz2));
    document.write('Result: ' + (quiz1 / quiz2));
}
else if (quiz3 === '%') {
    alert('Result: ' + (quiz1 % quiz2));
    document.write('Result: ' + (quiz1 % quiz2));
}
else {
    alert('Invalid operation!');
    document.write('Invalid operation!');
}

// --------------------- //