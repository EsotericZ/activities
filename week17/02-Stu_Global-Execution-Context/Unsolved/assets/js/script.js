// 1) Where is carNoise stored?
// Global
const carNoise = 'Honk';
// 2) Where is goFast stored?
// Global
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // When calling the function, the value is stored as that variable
  
  // 5) Where is makeNoise stored?
  // Inside the function
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // Function make noise is called and says "My speed is at {speed}, time to HONK"
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// An alert is generated, if they say yes run the function again at speed 80 else end the function
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
