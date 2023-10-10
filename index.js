// index.js

// Constructor function for BoardMember
function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

// Adding methods to the BoardMember class
BoardMember.prototype.veto = function () {
  return "No, I must disagree";
};

BoardMember.prototype.approve = function () {
  return "You can do that!";
};

BoardMember.prototype.doCharity = function () {
  return "I like to help people.";
};

BoardMember.prototype.releasePressStatement = function () {
  return "You will see great things from Scuber.";
};

BoardMember.prototype.sayHi = function () {
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
};

// Example usage:
const boardMember1 = new BoardMember("John Doe", "California", "Finance");
console.log(boardMember1.sayHi()); // Outputs: Hi, my name is John Doe. I am from California, and I was trained in Finance.
console.log(boardMember1.veto()); // Outputs: No, I must disagree
console.log(boardMember1.approve()); // Outputs: You can do that!
console.log(boardMember1.doCharity()); // Outputs: I like to help people.
console.log(boardMember1.releasePressStatement()); // Outputs: You will see great things from Scuber.
