// WRITE YOUR CODE HERE
var names = [
    'Jack',
    'Zero',
    'Oggie Boogie',
    'Sally',
    'Shock'
];

// LENGTH OF ARRAY
console.log(names.length);

// SLOW WAY
console.log("Welcome to the class " + names[0]);
console.log("Welcome to the class " + names[1]);
console.log("Welcome to the class " + names[2]);
console.log("Welcome to the class " + names[3]);
console.log("Welcome to the class " + names[4]);


// STRING INTERPOLATION
console.log(`Welcome to the class ${names[0]}`);
console.log(`Welcome to the class ${names[1]}`);
console.log(`Welcome to the class ${names[2]}`);
console.log(`Welcome to the class ${names[3]}`);
console.log(`Welcome to the class ${names[4]}`);

// LOOP WAY
for (let i = 0; i < names.length; i++) {
    console.log("Welcome to the class " + names[i])
}

// LOOP WAY - STRING INTERPOLATION
for (let i = 0; i < names.length; i++) {
    console.log(`Welcome to the class ${names[i]}`)
}

// CHANGE JACK TO SANTA
names[0] = 'Santa';

// CHECK SANTA IS IN CLASS
if (names[0] === 'Santa') {
    console.log(names[0] + " is in class")
}