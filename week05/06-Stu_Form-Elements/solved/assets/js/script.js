var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
const shoppingInputEl = $('#shopping-input');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
const handleSubmit = function(event) {
    event.preventDefault();

if (shoppingInputEl.val().trim() === '') {
    alert('Please enter a valid item');
    return;
}

    const listElement = $('<li>');
    listElement.text(shoppingInputEl.val());
    shoppingListEl.prepend(listElement);
    shoppingInputEl.val('');
}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission

shoppingFormEl.on('submit', handleSubmit);