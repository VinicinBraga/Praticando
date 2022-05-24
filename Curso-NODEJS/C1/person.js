class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `Hello!! My name is ${this.name}. How's it going?!`;
  }
}

module.exports = {
  Person,
};
