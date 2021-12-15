// TODO: What are we importing?
// file system structure
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
fs.appendFile('index.js', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')
);
ducks
