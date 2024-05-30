// TASK-3 (PART-1) //

let colors = [' Red', ' Pink', ' Green', ' Blue'];
document.write(colors, '<br/>');
alert(colors);

// UPDATED-1 //

const updatedColors1 = prompt('What color do you want to add at the beginning?');
colors.unshift(updatedColors1);
document.write('Updated-1: ' + colors, '<br/>');
alert('Updated-1: ' + colors);

// UPDATED-2 //

const updatedColors2 = prompt('What color do you want to add at the end?');
colors.push(updatedColors2);
document.write('Updated-2: ' + colors, '<br/>');
alert('Updated-2: ' + colors);

// UPDATED-3 //

colors.push('Yellow', 'Orange');
document.write('Updated-3: ' + colors, '<br/>');
alert('Updated-3: ' + colors);

// UPDATED-4 //

colors.shift();
document.write('Updated-4: ' + colors, '<br/>');
alert('Updated-4: ' + colors);

// UPDATED-5 //

colors.pop();
document.write('Updated-5: ' + colors, '<br/>');
alert('Updated-5: ' + colors);

// UPDATED-6 //

const updatedColorsIndex6 = +prompt('Now, at Which index do you want to add color?');
const updatedColors6 = prompt('Which color name do you want to add?');
colors.splice(updatedColorsIndex6, 0, updatedColors6);
document.write('Updated-6: ' + colors, '<br/>');
alert('Updated-6: ' + colors);

// UPDATED-7 //

const updatedColorsIndex7 = +prompt('Now, at Which index do you want to delete color?');
const updatedColors7 = prompt('How many colors do you want to delete?');
colors.splice(updatedColorsIndex7, updatedColors7);
document.write('Updated-7: ' + colors, '<br/>');
alert('Updated-7: ' + colors);

// ---------------------- //
