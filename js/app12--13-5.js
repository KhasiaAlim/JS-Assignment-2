// TASK-5 (PART-1) //

const time = +prompt('Enter time in 24-hour format: ');

if (time >= 0 && time < 1200) {
    alert('Good morning!');
    document.write('Good morning!');
    console.log('Good morning!');
}
else if (time >= 1200 && time < 1700) {
    alert('Good afternoon!');
    document.write('Good afternoon!');
    console.log('Good afternoon!');
}
else if (time >= 1700 && time < 2100) {
    alert('Good evening!');
    document.write('Good evening!');
    console.log('Good evening!');
}
else if (time >= 2100 && time <= 2359) {
    alert('Good night!');
    document.write('Good night!');
    console.log('Good night!');
}
else {
    alert('You have written wrong time!');
    document.write('You have written wrong time!');
    console.log('You have written wrong time!');
}

// ------------------- //