// TASK-4 (PART-1) //

let password = prompt('Enter your password:')
let found1 = false

if (password.length > 6 && isNaN(parseInt(password[0])) && password.length [a-zA-Z] && password.length [0-9] ) {
    found1 = true
    document.write('Entered Password: ' + password);
    console.log('Entered Password: ' + password);
}
else if (password.length < 6) {
    alert('Please enter a valid password')
    document.write('Entered Password: ' + password, '<br/>');
    document.write('Password must at least 6 characters long', '<br/>');
    document.write('Please enter a valid password');
    console.log('Entered Password: ' + password);
    console.log('Password must at least 6 characters long');
    console.log('Please enter a valid password');
}
else if (!isNaN(parseInt(password[0]))) {
    alert('Please enter a valid password')
    document.write('Entered Password: ' + password, '<br/>');
    document.write('Password cannot begin with a number', '<br/>');
    document.write('Please enter a valid password');
    console.log('Entered Password: ' + password);
    console.log('Password cannot begin with a number');
    console.log('Please enter a valid password');
}
if (!found1) {
    alert('Please enter a valid password')
    document.write('Entered Password: ' + password, '<br/>');
    document.write('Please enter a valid password');
    console.log('Entered Password: ' + password);
    console.log('Please enter a valid password');
}

// --------------------- //