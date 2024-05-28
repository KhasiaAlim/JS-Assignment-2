// TASK-3 (PART-1) //

document.write('<h3>Marks Sheet</h3>', '<br/>');

// SUBJECT 1 //

const quiz1 = +prompt("Marks Obtained in Subject 1: ");
const quiz2 = +prompt("Total Marks in Subject 1: ");

document.write('Subject 1:', '<br/>', '<br/>', 'Total Marks: ' + quiz2, '<br/>', 'Marks Obtained: ' + quiz1);

const percentage1 = (quiz1 / quiz2) * 100;

document.write('<br/>', 'Percentage: ' + percentage1 + '%');

if (percentage1 >= 80) {
    document.write('<br/>', 'Grade: ' + 'A-one', '<br/>', 'Remarkes: ' + 'Excellent', '<br/>', '<br/>');
}
else if (percentage1 >= 70) {
    document.write('<br/>', 'Grade: ' + 'A', '<br/>', 'Remarkes: ' + 'Good', '<br/>', '<br/>');
}
else if (percentage1 >= 60) {
    document.write('<br/>', 'Grade: ' + 'B', '<br/>', 'Remarkes: ' + 'You need to improve', '<br/>', '<br/>');
}
else if (percentage1 < 60) {
    document.write('<br/>', 'Grade: ' + 'Fail', '<br/>', 'Remarkes: ' + 'Fail', '<br/>', '<br/>');
}

// SUBJECT 2 //

const quiz3 = +prompt("Marks Obtained in Subject 2: ");
const quiz4 = +prompt("Total Marks in Subject 2: ");

document.write('Subject 2:', '<br/>', '<br/>', 'Total Marks: ' + quiz3, '<br/>', 'Marks Obtained: ' + quiz4);

const percentage2 = (quiz3 / quiz4) * 100;

document.write('<br/>', 'Percentage: ' + percentage2 + '%');

if (percentage2 >= 80) {
    document.write('<br/>', 'Grade: ' + 'A-one', '<br/>', 'Remarkes: ' + 'Excellent', '<br/>', '<br/>');
}
else if (percentage2 >= 70) {
    document.write('<br/>', 'Grade: ' + 'A', '<br/>', 'Remarkes: ' + 'Good', '<br/>', '<br/>');
}
else if (percentage2 >= 60) {
    document.write('<br/>', 'Grade: ' + 'B', '<br/>', 'Remarkes: ' + 'You need to improve', '<br/>', '<br/>');
}
else if (percentage2 < 60) {
    document.write('<br/>', 'Grade: ' + 'Fail', '<br/>', 'Remarkes: ' + 'Fail', '<br/>', '<br/>');
}

// SUBJECT 3 //

const quiz5 = +prompt("Marks Obtained in Subject 3: ");
const quiz6 = +prompt("Total Marks in Subject 3: ");

document.write('Subject 2:', '<br/>', '<br/>', 'Total Marks: ' + quiz5, '<br/>', 'Marks Obtained: ' + quiz6);

const percentage3 = (quiz5 / quiz6) * 100;

document.write('<br/>', 'Percentage: ' + percentage3 + '%');

if (percentage3 >= 80) {
    document.write('<br/>', 'Grade: ' + 'A-one', '<br/>', 'Remarkes: ' + 'Excellent', '<br/>', '<br/>');
}
else if (percentage3 >= 70) {
    document.write('<br/>', 'Grade: ' + 'A', '<br/>', 'Remarkes: ' + 'Good', '<br/>', '<br/>');
}
else if (percentage3 >= 60) {
    document.write('<br/>', 'Grade: ' + 'B', '<br/>', 'Remarkes: ' + 'You need to improve', '<br/>', '<br/>');
}
else if (percentage3 < 60) {
    document.write('<br/>', 'Grade: ' + 'Fail', '<br/>', 'Remarkes: ' + 'Fail', '<br/>', '<br/>');
}

// TOTAL //

const totalMarks = quiz1 + quiz3 + quiz5;
const marksObtained = quiz2 + quiz4 + quiz6;

document.write('Total:', '<br/>', '<br/>', 'Total Marks: ' + totalMarks, '<br/>', 'Marks Obtained: ' + marksObtained);

const totalPercentage = (quiz1 + quiz3 + quiz5) / (quiz2 + quiz4 + quiz6) * 100;

document.write('<br/>', 'Percentage: ' + totalPercentage + '%');

if (totalPercentage >= 80) {
    document.write('<br/>', 'Grade: ' + 'A-one', '<br/>', 'Remarkes: ' + 'Excellent', '<br/>', '<br/>');
}
else if (totalPercentage >= 70) {
    document.write('<br/>', 'Grade: ' + 'A', '<br/>', 'Remarkes: ' + 'Good', '<br/>', '<br/>');
}
else if (totalPercentage >= 60) {
    document.write('<br/>', 'Grade: ' + 'B', '<br/>', 'Remarkes: ' + 'You need to improve', '<br/>', '<br/>');
}
else if (totalPercentage < 60) {
    document.write('<br/>', 'Grade: ' + 'Fail', '<br/>', 'Remarkes: ' + 'Fail', '<br/>', '<br/>');
}

// --------------- //


