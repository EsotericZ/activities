const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
const doubledArray = originalArray.map( data => data*2 );
  // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
//   return data * 2;
// });

console.log(doubledArray);
console.log(originalArray);


// TODO: Describe how map is working in the example below. What will the value of tripledArray be?
const tripledArray = originalArray.map(data => data * 3);

// TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
const oddOrEven = originalArray.map(num => num % 2 === 0 ? 'even' : 'odd');

console.log(oddOrEven)
console.log(tripledArray)