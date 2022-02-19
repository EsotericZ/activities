class Stack {
  constructor (container = []) {
    if (Array.isArray(container)) {
        this.container = container;
    }
  };

  addContainer(thing) {
      return this.container.push(thing);
  };

  removeContainer() {
      return this.container.pop();
  };
};

module.exports = Stack;