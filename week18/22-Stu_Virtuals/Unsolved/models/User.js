const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    toJSON: {
      // TODO: Mongoose will not include virtuals by default, so add a `virtuals` property and set it's value to true
    },
    id: false,
  }
);

// TODO: Create a virtual property `fullName` on the userSchema
userSchema.virtual('fullName').get(function () {
  return `${this.first} ${this.last}`;
});

// TODO: Create a getter for the virtual that returns the full name of the user (first + last)
userSchema.virtual('fullName').set(function(currentValueBeingSaved) {
  const fullNameArr = currentValueBeingSaved.split(' ');
  const firstName = fullNameArr[0];
  const lastName = fullNameArr[1];
  this.set({
    first: firstName,
    last: lastName,
  })
})

// TODO: Create a setter for the virtual that sets the value of the first and last name, given just the `fullName`

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
