// TASK-4 (PART-1) //

console.log('Counting:');
document.write('Counting:', '<br/>');

for (let i = 1; i <= 15; i++) {
    console.log(i);
    document.write(i, ', ')
}

console.log('\nReverse counting:');
document.write('<br/>', 'Reverse counting:', '<br/>')

for (let i = 10; i >= 1; i--) {
    console.log(i);
    document.write(i, ', ');
}

console.log('\nEven:');
document.write('<br/>', 'Even:', '<br/>')

for (let i = 0; i <= 20; i += 2) {
    console.log(i);
    document.write(i, ', ');
}

console.log('\nOdd:');
document.write('<br/>', 'Odd:', '<br/>')

for (let i = 1; i <= 19; i += 2) {
    console.log(i);
    document.write(i, ', ');
}

console.log('\nSeries:');
document.write('<br/>', 'Series:', '<br/>')

for (let i = 1; i <= 10; i++) {
    console.log(i * 2 + 'k');
    document.write(i, ', ');
}

// ----------------------- //