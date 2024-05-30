// TASK-1 (PART-1) //

const studentNames1 = [];
const studentNames2 = {
    names: []
}

// TASK-1 (PART-2) //

const stringsArray = ['Canada', 'Saudi Arabia', 'America'];
const numberArrays = [90, 80, 70, 60, 50, 40, 30, 20, 10];
const booleanArrays = [true, false];
const mixedArrays = ['Canada', true, 90, 80, false, 10, 'Saudi Arabia', 20, 'America', 40];

// TASK-1 (PART-3) //

const qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];

document.write('<h2>Educational Qualifications in Pakistan:</h2>', '<br/>');
for (var i = 0; i < qualifications.length; i++) {
    document.write('<ul>', '<li>', qualifications[i], '</li>', '</ul>');
}

// ------------------------ //