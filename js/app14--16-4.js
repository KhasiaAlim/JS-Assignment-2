// TASK-4 (PART-1) //

const studentScore = [320, 230, 480, 120];
document.write('Scores of Students: ' + studentScore, '<br/>');
console.log('Scores of Students: ' + studentScore);
const studentScoreSort = studentScore.sort()
document.write('Ordered Scores of Students: ' + studentScoreSort, '<br/>');
console.log('Ordered Scores of Students: ' + studentScoreSort);

// TASK-4 (PART-2) //

const cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
document.write('Cities list:', cities, '<br/>');
console.log('Cities list:', cities);

const selectedCities = cities.slice(0, 3);
document.write('Selected cities list:', selectedCities, '<br/>');
console.log('Selected cities list:', selectedCities);

// TASK-4 (PART-3) //

const arr = ['This ', ' is ', ' my ', ' cat'];
document.write('Array: ', arr, '<br/>');
console.log('Array: ', arr);

const singleString = arr.join("");
document.write('Single string: ', singleString, '<br/>');
console.log('Single string: ', singleString);

// TASK-4 (PART-4) //

let fifo = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write('Devices: ', '<br/>', fifo, '<br/>');
console.log('Devices: ', '<br/>', fifo);

for (let i = 0; i < fifo.length; i++) {
    document.write('Out:', '<br/>', fifo[i], '<br/>');
    console.log('Out:', '<br/>', fifo[i]);
}

// TASK-4 (PART-5) //

let lifo = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write('Devices: ', '<br/>', lifo, '<br/>');
console.log('Devices: ', lifo);

for (let i = lifo.length - 1; i >= 0; i--) {
    document.write('Out:', '<br/>', lifo[i], '<br/>');
    console.log('Out:', lifo[i]);
}

// ---------------------- //