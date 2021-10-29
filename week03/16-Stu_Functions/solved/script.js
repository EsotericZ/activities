// Write Your Code Below
function eq(num1, num2) {
    if (num1 === num2) {
        console.log('They are equal in type and value');
    } else if (num1 == num2) {
        console.log('They are equal in value');
    } else {
        console.log('They are not equal');
    }
}

eq(1, 1);
eq(1, "1");
eq(1,2);