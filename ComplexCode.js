/*
Filename: ComplexCode.js
Description: A sophisticated and elaborate JavaScript code showcasing various advanced concepts and techniques.
*/

// Global variables
var randomNumber = Math.random() * 100;
const PI = 3.14159;

// Class definition
class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    console.log("Drawing shape");
  }

  get area() {
    return 0;
  }

  static printClassName() {
    console.log("Shape");
  }
}

// Inheritance and method overriding
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  draw() {
    console.log(`Drawing circle with radius ${this.radius}`);
  }

  get area() {
    return PI * this.radius * this.radius;
  }

  static printClassName() {
    console.log("Circle");
  }
}

// Templating
function getShapeDetails(shape) {
  return `
    Shape Details:
    - Color: ${shape.color}
    - Area: ${shape.area}
  `;
}

// Promises and async/await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function performAsyncAction() {
  console.log("Starting async action...");
  await delay(2000);
  console.log("Async action complete!");
}

// Event listeners
document.addEventListener("DOMContentLoaded", function() {
  console.log("Document is ready!");

  // DOM manipulation
  var button = document.createElement("button");
  button.textContent = "Click me!";
  button.addEventListener("click", function() {
    console.log("Button clicked!");
  });

  document.body.appendChild(button);
});

// Higher-order functions
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  }
}

var multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(5)); // Output: 10

// Iterators and generators
function* fibonacciSequence() {
  let a = 1, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

var fibonacciGen = fibonacciSequence();

for (let i = 0; i < 10; i++) {
  console.log(fibonacciGen.next().value);
}

// Regular Expressions
var regex = /([A-Z][a-z]+)\s([A-Z][a-z]+)/;
var name = "John Doe";
var matches = regex.exec(name);
console.log(matches[1]); // Output: John
console.log(matches[2]); // Output: Doe

// Web API usage
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Complex logic flow
var fruits = ["apple", "banana", "orange"];
var filteredFruits = fruits
  .filter(fruit => fruit !== "banana")
  .map(fruit => fruit.toUpperCase())
  .reduce((accumulator, fruit) => accumulator + " " + fruit, "");

console.log(filteredFruits); // Output: APPLE ORANGE

// ... Keep adding more complex code here ...

// Execution starts here
Shape.printClassName();
Circle.printClassName();

var circle = new Circle("red", 5);
circle.draw();
console.log(getShapeDetails(circle));

performAsyncAction();