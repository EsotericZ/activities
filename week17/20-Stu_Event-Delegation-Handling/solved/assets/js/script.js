const buttons = document.getElementsByTagName('button');
const clickHandler = function () {
// TODO: Add a comment describing the purpose of this variable.
//  Creates the count variable which will be a part of the clickHandlers lexical scrope
  let count = 0;
  // TODO: Add a comment describing what is happening.
  // an inner function which creates closure
  return function () {
    console.log('weeeee');
    // TODO: Add a comment describing how this variable is being scoped.
    // grabs the local/parent variable count
    count++;
    // TODO: Add a comment describing how we are using the 'count' variable.
    // adding the count to the text content
    this.textContent = `Clicks: ${count}`;
  };
};
// TODO: Add a comment describing the purpose of this loop.
// We loop through the buttons array which is every single button tag
// that's on our page
// and then we're are adding an event listener to each one
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}
const multiplierBy = (multiplier) => {
  return function(number) {
    return number * multiplier;
  }
};
const multiplyByTwo = multiplierBy(2);
const multiplyByThree = multiplierBy(3);
const multiplyByFour = multiplierBy(4);
const twoXFour = multiplyByTwo(4);
const twoXFive = multiplyByTwo(5);
console.log(twoXFour);
console.log(twoXFive);