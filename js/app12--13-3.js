// TASK-3 (PART-1) //

let quiz1 = prompt('Enter your password:');
const password = 'Saylani';

if (quiz1 === password) {
    alert('Correct! The password you entered matches the original password');
    document.write('Correct! The password you entered matches the original password');
}
else if (quiz1 === null || quiz1 === "") {
    alert('Please enter your password');
    document.write('Please enter your password');
}
else {
    alert('Incorrect password');
    document.write('Incorrect password');
}

// ------------------- //