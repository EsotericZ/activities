// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name,tech) {
    this.name = name;
    this.tech = tech;
    this.introduction = () => {
        console.log(`This is ${this.name}, they are into ${this.tech}`)
    };
}

const names = new Developer('CJ', 'Technologies');
names.introduction();
// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// TODO: Create a new object using the 'Developer' constructor

// TODO: Call the 'introduction()' method on the new object
