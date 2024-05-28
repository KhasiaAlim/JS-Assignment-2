// TASK-2 (PART-1) //

let a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// TASK-2 (PART-2) //

let b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// TASK-2 (PART-3) //

let c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// TASK-2 (PART-4) //

let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// TASK-2 (PART-5) //

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// TASK-2 (PART-6) //

if ("car" < "cat") {
    alert("car is smaller than cat");
}

// ---------------------- //

document.write('given condition for variable a is true', '<br/>', 'condition 2 is true', '<br/>', 'condition 4 is true', '<br/>', 'The cost equals', '<br/>', 'True', '<br/>', 'car is smaller than cat');

// ---------------------- //