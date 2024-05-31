// TASK-6 (PART-1) //

let A = [24, 53, 78, 91, 12];
document.write('Array Items: ' + A, '<br/>');
console.log('Array Items: ' + A);

let number1 = A[0];

for (let i = 1; i < A.length; i++) {
    if (A[i] > number1) {
        number1 = A[i];
    }
}

document.write('The largest number is ' + number1, '<br/>');
console.log('The largest number is ' + number1);

// TASK-6 (PART-2) //

A = [24, 53, 78, 91, 12];
document.write('Array Items: ' + A, '<br/>');
console.log('Array Items: ' + A);

let number2 = A[0];

for (let i = 1; i < A.length; i++) {
    if (A[i] < number2) {
        number2 = A[i];
    }
}

document.write('The smallest number is ' + number2, '<br/>');
console.log('The smallest number is ' + number2);

// TASK-6 (PART-3) //

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(i, ', ');
        console.log(i);
    }
}

// ----------------------- //