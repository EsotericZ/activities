// TODO: Refactor the class to a factory function.
// class Lesson {
//   constructor() {
//     this.title = 'Unit 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }

// const csForJS = new Lesson();
// csForJS.information();

const information = ({ title, description }) => ({
  information: () => console.log(title, description),
});

const lessonCreator = (title, description) => {
  const state = { 
    title, 
    description,
  };

  return {
    ...information(state),
  }
}

const factoryFunction = lessonCreator('Factory Functions', 'title, description');
factoryFunction.information();