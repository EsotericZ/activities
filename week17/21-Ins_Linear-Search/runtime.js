const getHead = array => array[0];

// O(N)
const indexOf = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

const doubleLoop = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[j])
        }
    }
}

const array = [
    [1,2,3], 
    [1,2,3,4],
    [1,2,3,4,5]
];

// O(n*m)
// n = size of the array
// m = size of each nested element in the array
const nestedLogger = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i][j]);
        }
    }
}

nestedLogger(array)

// O(n*3)
// O(n) cause 3 is a constant so you can drop it
const onlyLog3 = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < 3; j++) {
            console.log(array[i][j]);
        }
    }
}

// O(2n)
// O(n) cause 2 is a constant so you can drop it
const twoForLoops = array => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    for (let j = 0; j < array.length; j++) {
        console.log(array[j]);
    }
}