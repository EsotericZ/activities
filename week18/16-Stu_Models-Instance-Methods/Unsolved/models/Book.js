// const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
    {
        timestamps: true,
    },
});

// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function() {
    console.log(`Buy the awesome book ${this.title} for only ${this.price/2}!`);
}

// TODO: Create a model named `Book`
const Book = model('Book', bookSchema);

mongoose.connect('mongodb://localhost:27017/booksDB')
    .then(() => {
        // TODO: Create a new instance of the model
        Book.create({ 
            title: 'Where Waldo',
            author: 'idk',
            price: 50,
        }).then(book => {
            book.getDiscount();
        })
    });

// TODO: Call the custom instance method on the instance

module.exports = Book;
