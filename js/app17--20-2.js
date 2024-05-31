// TASK-2 (PART-1) //

const quiz1 = +prompt('Enter a number to show its multiplication table:');
const quiz2 = +prompt('Enter length multiplication table: ');

document.write('Multiplication Table of ' + quiz1 + ':', '<br/>');
console.log('Multiplication Table of ' + quiz1 + ':');

for (i = 1; i <= quiz2; i++) {
   document.write(quiz1, ' x ', i, ' = ', (quiz1 * i), '<br/>');
   console.log(quiz1, ' x ', i, ' = ', (quiz1 * i));
}

// ------------------------- //