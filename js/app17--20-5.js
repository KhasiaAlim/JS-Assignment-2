// TASK-5 (PART-1) //

const A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
const B = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

let found = false;

for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === B) {
        found = true;
        alert(B.toLowerCase() + ' is available at index ' + i + ' in our bakery');
        document.write(B.toLowerCase() + ' is available at index ' + i + ' in our bakery');
        break;
    }
}

if (!found) {
    alert('We are Sorry! ' + B.toLowerCase() + ' is not available in our bakery');
    document.write('We are Sorry! ' + B.toLowerCase() + ' is not available in our bakery');
}

// --------------------- //