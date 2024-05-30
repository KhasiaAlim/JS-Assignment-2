// TASK-1 (PART-1) //

const question = prompt('Enter any Character: ');
const charCode = question.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
    alert(question + " is a number");
    document.write(question + " is a number");
}
else if (charCode >= 65 && charCode <= 90) {
    alert(question + " is an uppercase letter");
    document.write(question + " is an uppercase letter");
}
else if (charCode >= 97 && charCode <= 122) {
    alert(question + " is a lowercase letter.");
    document.write(question + " is an lowercase letter");
}
else {
    alert(question + " is not recognized");
    document.write(question + " is not recognized");
}

// ------------------------ //