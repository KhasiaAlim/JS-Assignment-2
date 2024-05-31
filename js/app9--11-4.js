// TASK-4 (PART-1) //

const num = 4;
const guessNum = +prompt('Guess the secret number:');
const guessNum2 = num - 1;

if (num === guessNum) {
    alert('Bingo! Correct answer');
}
else if (guessNum === guessNum2) {
    alert('Close enough to the correct answer');
}

// -------------- //

document.write('Secret Number was 4!');
console.log('Secret Number was 4!');

// -------------- //