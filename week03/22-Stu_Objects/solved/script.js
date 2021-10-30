//WRITE YOUR CODE BELOW
const customerOrder = {
    name: 'Diet Coke',
    numberOfSungars: 3,
    readyForPickup: true
};

console.log(`${customerOrder.name} with ${customerOrder.numberOfSungars} sugars`);

if (customerOrder.readyForPickup === true) {
    console.log("Ready for Pickup");
} else {
    console.log("Still in order queue")
}