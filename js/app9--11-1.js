// TASK-1 (PART-1) //

const quiz1 = prompt('City name: ');
if (quiz1 === 'Karachi' || quiz1 === 'karachi') {
    alert('Welcome to city of lights');
}
else {
    alert('Welcome to ' + quiz1);
}

// TASK-1 (PART-2) //

const quiz2 = prompt('Gender: ');
if (quiz2 === 'Male' || quiz2 === 'male') {
    alert('Good Morning Sir');
}
else if (quiz2 === 'Female' || quiz2 === 'female') {
    alert("Good Morning Ma’am");
}

// TASK-1 (PART-3) //

const quiz3 = prompt('Road Traffic Signal: ');
if (quiz3 === 'Red' || quiz3 === 'red') {
    alert('Must Stop');
}
else if (quiz3 === 'Yellow' || quiz3 === 'yellow') {
    alert('Ready to move');
}
else if (quiz3 === 'Green' || quiz3 === 'green') {
    alert('Move now');
}

// TASK-1 (PART-4) //

const quiz4 = prompt('Remaining Fuel in your car (in litres): ');
if (quiz4 < 0.25) {
    alert('Please refill the fuel in your car');
}

// --------------- //

document.write('City: ' + quiz1 + ' --- Welcome to city of lights/Welcome to (city name) ', '<br/>', 'Gender: ' + quiz2 + " --- Good Morning Ma'am(Female)/Sir(Male) ", '<br/>', 'Road Traffic Signal: ' + quiz3 + ' --- Red(Must stop)/Yellow(Ready to move)/Green(Move now) ', '<br/>', 'Remaining Fuel in your car (in litres): ' + quiz4 + ' --- less than 0.25-->Please refill the fuel in your car ');

// --------------- //