// Follow the thread of execution 
// 1) greeting is stored in the global execution context
const greeting = 'Hello';

// 2) sayHello is stored in the global execution context
function sayHello(name) {
  // 5) Once the sayHello execution context is created, "Gabby" is assigned to name
  // 6) salutation is stored in the function execution context of sayHello. It is assigned the string, 'how are you?'
  const salutation = 'how are you?';

  // 7) The global execution context as well as the local function execution context are accessible
  console.log(`${greeting} ${name}, ${salutation}`);
}

// 3) The alert is a Web API, once resolved, is stored in the callback queue then the call stack to be processed
alert("What's up doc?");

// 4) Calling sayHello, places it on the call stack which creates a new function execution context
sayHello("Gabby");



// IN CLASS PROBLEM

// const people = ['Matt', 'John', 'Kirtley', 'Jesus', 'Erna', 'CJ'];

// O(N)
// const finder = (array, target) => {
//   for (let i = 0; i < array.length; i++) {
//     if (target === array[i]) {
//       return true;
//     }
//   }
//   return false;
// };
// console.log(finder(people, 'CJ'));


// O(N2)
// const finder = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[j])
//     }
//   }
// };
// console.log(finder(people));