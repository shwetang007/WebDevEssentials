// THIS FILE IS MADE TO SERVE IT'S PURPOPOSE AS THE EXECUTION FILE WHICH TELLS THE USER FOR DIFFERENT METHODS SUCH THAT THE PERSON WILL BE ABLE TO UNDERSTAND THE EXAMPLES

// REFER THE INDEPTH.MD FILE FOR BETTER UNDERSTANDING OF THE CONCEPTS SUCH THAT EACH TOPIC SERVES ITS PURPOSE.



//Hello, World! - Basic Output:
// hello.js
console.log("Hello, World!");


//                    VARIABLES IN JAVA SCRIPT

let name = 'Shwetang';
console.log(name);

//below are the examples of how the variables declaration often come in use and how diffrent domains will be making use of varaiables.

1. ** Variable Declaration(Global Scope):**

   // Declaring a global variable
   var globalVar = "I'm a global variable";


2. ** Function Scope:**

    // Defining a function with a function-scoped variable
    function exampleFunction() {
        var functionVar = "I'm a function-scoped variable";
        console.log(functionVar);
    }

// Calling the function
exampleFunction();


3. ** Block Scope(Using`let`):**

   // Creating a block-scoped variable using 'let'
   if (true) {
    let blockVar = "I'm a block-scoped variable";
    console.log(blockVar);
}


4. ** Closure(Preserving Variables):**

    // Creating an outer function with an outer variable
    function outerFunction() {
        var outerVar = "I'm an outer variable";

        // Defining an inner function that uses the outer variable
        function innerFunction() {
            console.log(outerVar);
        }

        // Returning the inner function
        return innerFunction;
    }

// Creating a closure by calling the outer function
var closureExample = outerFunction();

// Executing the closure
closureExample();


5. ** Asynchronous Operation(Using`let`):**

    // Executing an asynchronous operation with a block-scoped variable
    setTimeout(() => {
        let asyncVar = "I'm a variable in an asynchronous operation";
        console.log(asyncVar);
    }, 1000);


6. ** Object Property:**

   // Creating an object with properties
   var person = {
    name: "John",
    age: 30
};

// Accessing and logging an object property
console.log(person.name);


7. ** Array Element:**

   // Creating an array with elements
   var colors = ["red", "green", "blue"];

// Accessing and logging an array element
console.log(colors[0]);


8. ** Parameter Passing:**

    // Defining a function that takes a parameter
    function greet(name) {
        console.log("Hello, " + name + "!");
    }

// Calling the function and passing a value to the parameter
greet("Alice");


9. ** Modifying Variables:**

    // Modifying a variable using an increment operation
    let counter = 0;
counter += 1;
console.log(counter);


10. ** Destructuring Assignment:**

    // Creating an object and using destructuring assignment to extract values
    let person = { firstName: "John", lastName: "Doe" };
let { firstName, lastName } = person;
console.log(firstName, lastName);


11. ** Template Literal:**

    // Using template literals for string interpolation
    let name = "Alice";
let greeting = `Hello, ${name} !`;
console.log(greeting);


12. ** Promise Chaining:**

    // Creating a function that returns a promise
    function fetchData() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("Data fetched"), 1000);
        });
    }

// Fetching data and chaining promises to process the result
fetchData()
    .then((data) => {
        console.log(data);
        return "Processed data";
    })
    .then((processedData) => {
        console.log(processedData);
    });

// FOR BETTER INSIGHT S ON THIS PLEASE GO THROUGH "INDEPTH.MD " TO GET ALL CRITERIAS OF THE TOPIC TO BE FULLFILLED.


//  CONSTANTS

// BELOW ARE THE CASES OF HOW THE CONSTANTS WILL BE USED IN EVERY POSSIBILITY OF DECLARATION:

### 1. ** Single Constant:**
    const PI = 3.14;


### 2. ** Multiple Constants:**
    
const MAX_WIDTH = 800;
const MAX_HEIGHT = 600;


### 3. ** Object Property as a Constant:**
    
const config = {
    API_KEY: "your_api_key",
    MAX_REQUESTS_PER_MINUTE: 60
};


### 4. ** Array Element as a Constant:**
    
const colors = ["red", "green", "blue"];
console.log(colors[0]);  // Outputs: "red"


### 5. ** Function Return Value as a Constant:**

    function calculateArea(radius) {
        const PI = 3.14;
        return PI * radius * radius;
    }

console.log(calculateArea(5));  // Outputs: 78.5


### 6. ** Template Literal with a Constant:**
    
const name = "John";
const greeting = `Hello, ${name} !`;
console.log(greeting);  // Outputs: "Hello, John!"


### 7. ** Constants in a Block Scope:**

{
    const BLOCK_CONSTANT = "I am in a block scope";
    console.log(BLOCK_CONSTANT);
}


### 8. ** Global Constants(not recommended):**

    // Avoid global constants when possible
    window.GLOBAL_CONSTANT = "I am a global constant";


### 9. ** Using Constants in a Switch Statement:**
    
const DAY = "Monday";

switch (DAY) {
    case "Monday":
        console.log("It's Monday!");
        break;
    // Additional cases...
    default:
        console.log("It's another day.");
}


### 10. ** Constants in Classes or Constructors:**

    class Circle {
        constructor(radius) {
            this.radius = radius;
            this.PI = 3.14;
        }

        calculateArea() {
            return this.PI * this.radius * this.radius;
        }
    }

const circle = new Circle(5);
console.log(circle.calculateArea());  // Outputs: 78.5


### 11. ** Constants in Promises:**
   
const fetchData = new Promise((resolve, reject) => {
    // Resolve or reject based on asynchronous operation
});


### 12. ** Constants in Arrow Functions:**
    
const multiply = (a, b) => {
    const RESULT = a * b;
    return RESULT;
};

console.log(multiply(5, 3));  // Outputs: 15


### 13. ** Constants as Function Arguments:**

    function printMessage(message) {
        const PREFIX = "Message: ";
        console.log(PREFIX + message);
    }

printMessage("Hello, world!");  // Outputs: "Message: Hello, world!"


// PRIMITIVE DATA TYPES OF JAVA SCRIPT

// BELOW IS WHAT ALL THE DATA TYPES ARE USE IN THE JAVASCRIPT ARE MENTIONED:

// REFER TO THE INDEPTH FILE FOR PROPER INTRODUCTION TO THE TOPICS

// BEOW IS THE BASIC WAY OF DECLARING ALL THOSE PRIMITIVE TYPES.


let name = 'healthy';
let height = 22;
let age = 38;
let isApproved = false;
let firstName = undefined;
let selectedcolor = null;

### 1. ** String:**

    let greeting = 'Hello';
let name = "John";

console.log(greeting);  // Outputs: Hello
console.log(name);      // Outputs: John


### 2. ** Number:**

    let age = 25;
let pi = 3.14;

console.log(age);  // Outputs: 25
console.log(pi);   // Outputs: 3.14


### 3. ** Boolean:**

    let isStudent = true;
let hasJob = false;

console.log(isStudent);  // Outputs: true
console.log(hasJob);     // Outputs: false


### 4. ** Undefined:**

    let undefinedVariable;

console.log(undefinedVariable);  // Outputs: undefined


### 5. ** Null:**

    let nullValue = null;

console.log(nullValue);  // Outputs: null


### 6. ** Symbol:**

    let uniqueKey = Symbol('unique');
let anotherKey = Symbol('unique');  // Symbols are always unique

console.log(uniqueKey);      // Outputs: Symbol(unique)
console.log(anotherKey);     // Outputs: Symbol(unique)
console.log(uniqueKey === anotherKey);  // Outputs: false (symbols are unique)


// DYNAMIC NATURE OF THE JAVASCRIPT

// BELOW ARE SOME EXAMPLES 

### 1. ** Dynamic Typing:**

    let dynamicVariable = 42;  // Number
console.log(typeof dynamicVariable);  // Outputs: number

dynamicVariable = "Hello"; // String
console.log(typeof dynamicVariable);  // Outputs: string


2. Dynamic Objects:
let person = { name: "John" };
console.log(person.age);  // Outputs: undefined

person.age = 25;  // Adding a property dynamically
console.log(person.age);  // Outputs: 25

delete person.name;  // Removing a property dynamically
console.log(person.name);  // Outputs: undefined


### 3. ** Dynamic Functions:**

    let dynamicFunction = function (x, y) {
        return x + y;
    };

console.log(dynamicFunction(2, 3));  // Outputs: 5

### 4. ** Prototypal Inheritance:**

    let parentObject = { commonProperty: "I am common" };
let childObject = Object.create(parentObject);

console.log(childObject.commonProperty);  // Outputs: I am common

childObject.additionalProperty = "I am additional";
console.log(parentObject.additionalProperty);  // Outputs: undefined


### 5. ** Late Binding:**

    function dynamicFunction() {
        console.log(this.dynamicProperty);
    }

let dynamicObject1 = { dynamicProperty: "Object 1" };
let dynamicObject2 = { dynamicProperty: "Object 2" };

dynamicFunction.call(dynamicObject1);  // Outputs: Object 1
dynamicFunction.call(dynamicObject2);  // Outputs: Object 2


### 6. ** Dynamic Code Execution(Use with Caution):**

    let dynamicCode = "console.log('Hello, dynamic code!');";
eval(dynamicCode);  // Outputs: Hello, dynamic code!


// REFERENCE TYPES

//Below are concise code snippets for each reference type in JavaScript, explained in a manner suitable for a C-suite executive level:

### 1. ** Object:**

    // Representing a person with name and age properties
    let person = { name: "John", age: 30 };


### 2. ** Array:**

    // Storing a list of colors in an array
    let colors = ["red", "green", "blue"];

### 3. ** Function:**

    // Defining a greeting function with dynamic name input
    function greet(name) {
        return `Hello, ${name} !`;
    }


### 4. ** Date:**

    // Creating a Date object to represent the current date and time
    let currentDate = new Date();


### 5. ** RegExp(Regular Expression):**

    // Using a regular expression to match alphabetical characters
    let pattern = /[a-zA-Z]+/;


### 6. ** Map:**

    // Creating a Map to store key-value pairs
    let myMap = new Map();
myMap.set("key1", "value1");


### 7. ** Set:**

    // Using a Set to store unique values
    let mySet = new Set([1, 2, 3, 1]);


### 8. ** Symbol:**

    // Creating a unique symbol for a special identifier
    let uniqueKey = Symbol("unique");


//  now since the reference data types are very crucial we will study them in detail

// objects



### 3.1 Understanding Object Basics

// Defining a person object with name and age properties
let person = {
    name: "John Doe",
    age: 30
};


### 3.2 Object Properties and Methods

// Extending the person object with additional details and a method
let person = {
    name: "John Doe",
    age: 30,
    address: {
        city: "Metropolis",
        country: "Gotham"
    },
    greet: function () {
        return `Hello, I'm ${this.name}!`;
    }
};

console.log(person.greet());  // Outputs: Hello, I'm John Doe!


### 3.3 Dynamic Object Manipulation

// Dynamically adding and modifying properties
person.job = "Software Engineer";
person.age += 1;

// Dynamically removing a property
delete person.address;

console.log(person);

### 3.4 Object Constructors and Prototypes

// Object constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Creating instances of the Car object
let myCar = new Car("Toyota", "Camry");
let anotherCar = new Car("Ford", "Mustang");


### 3.5 ES6 Object Enhancements

// ES6 shorthand property notation and method definition
let name = "Jane";
let age = 25;

let person = { name, age, greet() { return `Hello, I'm ${this.name}!`; } };
console.log(person.greet());  // Outputs: Hello, I'm Jane!


### 3.6 Object Destructuring

// Object destructuring example
let { name, age } = person;
console.log(name);  // Outputs: John Doe
console.log(age);   // Outputs: 31


### 3.7 Best Practices and Use Cases

// Best practices for object organization and encapsulation
let product = {
    productName: "Laptop",
    price: 999.99,
    details: {
        brand: "TechCo",
        weight: "2kg"
    },
    displayDetails: function () {
        return `${this.productName} - $${this.price}`;
    }
};

console.log(product.displayDetails());  // Outputs: Laptop - $999.99


### 3.8 Real - world Examples

// Real-world example: Representing a book
let book = {
    title: "The Art of JavaScript",
    author: "Coding Guru",
    pages: 300,
    isAvailable: true,
    borrow: function () {
        this.isAvailable = false;
        console.log("Book borrowed successfully.");
    }
};

book.borrow();  // Outputs: Book borrowed successfully.


### 3.9 The Need for Objects

// Example: Representing user details with and without objects
let userWithoutObject = {
        username: "js_coder",
        email: "js@example.com"
    };

let username = "js_coder";
let email = "js@example.com";


### 3.10 Historical Context and Evolution

// Example: Early JavaScript object creation
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let john = new Person("John", 30);


### 3.11 Consequences of Not Using Objects

// Example: Consequences of unstructured data without objects
let name = "John Doe";
let age = 30;
let city = "Metropolis";


### 3.12 Alternatives to Object Usage

// Examples: Alternatives to objects for data representation
let colors = ["red", "green", "blue"];
let productName = "Laptop";
let productPrice = 999.99;
let age = 25;


### 3.13 Why Use Objects ?

    // Examples: Benefits of using objects for organization and reusability
    let user = { username: "js_coder", email: "js@example.com" };
let button = { label: "Click Me", onClick: function () { /* ... */ } };


### 3.14 When to Use Objects

// Examples: Scenarios where objects are beneficial
let userProfile = { username: "js_dev", email: "js@example.com", /* ... */ };
let appSettings = { theme: "light", language: "en", /* ... */ };


### 3.15 When Not to Use Objects

// Examples: Scenarios where objects may not be necessary
let age = 30;
let fontSize = 16;
let colors = ["red", "green", "blue"];


### 3.16 How to Use Objects

// Examples: Basics of object declaration and manipulation
let person = { name: "John Doe", age: 30 };
console.log(person.name);  // Outputs: John Doe

person.age += 1;
person.job = "Developer";


### 3.17 Tech Principles in Real - world Non - tech Scenarios

// Example: Applying object principles to non-tech scenarios
let conferenceSpeaker = { name: "Tech Expert", topic: "Innovation", /* ... */ };
let eventDetails = { venue: "City Hall", date: "2023-05-15", /* ... */ };


### 3.18 Tech Principles in Real - world Tech Scenarios

// Example: Translating object principles to tech scenarios
let databaseTable = { tableName: "Users", columns: ["id", "username", "email"], /* ... */ };
let uiButtonComponent = { label: "Submit", onClick: function () { /* ... */ }, /* ... */ };


### 3.19 Deconstructing the Terminology

// Examples: Understanding object-related terminology
let propertyExample = { key: "value" };
let methodExample = { greet: function () { /* ... */ } };
let objectLiteralExample = {};
let instanceExample = new Person("John", 30);


### 3.20 Alternatives to Object Usage

// Examples: Using alternatives to objects based on scenarios
let colorsArray = ["red", "green", "blue"];
let individualVariable = "This is a simple value";
let basicData = 25;
let basicFunction = function (a, b) { return a + b; };


### 3.21 Best Industry Standards Practices

// Examples: Applying best practices for object design
let productWithBestPractices = {
    productName:

        "Laptop",
    price: 999.99,
    details: { brand: "TechCo", weight: "2kg" },
    displayDetails: function () { /* ... */ }
};


### 3.22 Consequences of Ignoring Best Practices

// Example: Consequences of ignoring best practices
let poorlyNamedObject = { nm: "John", eml: "john@example.com" };
let unstructuredObject = { n: "Bob", sal: 50000, a: 30, j: "Developer" };
let overlyComplexObject = { a: [1, 2, 3], b: { c: { d: "nested" } } };
let hardToMaintainObject = { option1: true, optTwo: false, setting3: "value" };




// ARRAYS



### 1. Creating an Array:


// Creating an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Creating an array of strings
let fruits = ["apple", "orange", "banana"];

// Creating an empty array
let emptyArray = [];

### 2. Accessing Elements:

// Accessing elements by index
let firstNumber = numbers[0];  // 1
let secondFruit = fruits[1];   // "orange"


### 3. Modifying Arrays:


// Adding elements to the end
fruits.push("grape");

// Removing the last element
let removedFruit = fruits.pop();


### 4. Iterating Over Arrays:


// Using a for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Using forEach method
fruits.forEach(fruit => console.log(fruit));

### 5. Array Methods:


// Using map to create a new array
let doubledNumbers = numbers.map(num => num * 2);

// Using filter to get even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);

// Using reduce to calculate the sum
let sum = numbers.reduce((acc, num) => acc + num, 0);


### 6. Multi - dimensional Array:

// Creating a 2D array representing a matrix
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

### 7. Array Destructuring:


// Destructuring assignment
let [first, second, third] = numbers;
console.log(first);  // 1


### 8. Real - world Example - To - Do List:

// Representing a to-do list with an array of objects
let toDoList = [
    { task: "Complete assignment", priority: "High" },
    { task: "Buy groceries", priority: "Medium" },
    { task: "Exercise", priority: "Low" }
];


### 9. Real - world Example - Filtering Data:


// Filtering objects based on a condition
let highPriorityTasks = toDoList.filter(item => item.priority === "High");


### 10. Real - world Example - Calculating Averages:


// Calculating the average of an array of numbers
let average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;




// FUNCTIONS



### 1. Function Declaration:


// Declaring a basic function
function greet(name) {
    console.log(`Hello, ${name} !`);
}

// Invoking the function
greet("Alice");  // Outputs: Hello, Alice!


### 2. Function Expression:


// Function expression
let multiply = function (x, y) {
    return x * y;
};

let result = multiply(4, 6);  // result is now 24


### 3. Arrow Function:

// Arrow function
let square = (num) => num * num;

let squaredValue = square(3);  // squaredValue is now 9


### 4. IIFE(Immediately Invoked Function Expression):


// IIFE for creating a private scope
(function () {
    let secret = "I am hidden!";
    console.log(secret);
})();  // Outputs: I am hidden!

// 'secret' is not accessible outside the IIFE


### 5. Callback Function:


// Callback function as an argument
function performOperation(x, y, callback) {
    let result = callback(x, y);
    console.log(result);
}

performOperation(2, 3, add);  // Outputs: 5


### 6. Higher - Order Function:


// Higher-order function that returns a function
function multiplier(factor) {
    return function (x) {
        return x * factor;
    };
}

let double = multiplier(2);
let result = double(5);  // result is now 10


### 7. Real - world Example - Validation Function:


// Using a function to validate email format
function isValidEmail(email) {
    // Validation logic (simplified)
    return /\S+@\S+\.\S+/.test(email);
}

let userEmail = "user@example.com";
let isEmailValid = isValidEmail(userEmail);  // true


### 8. Real - world Example - Event Handler:


// Handling button click with a function
function handleButtonClick() {
    console.log("Button clicked!");
}

// Adding the function as an event listener
document.getElementById("myButton").addEventListener("click", handleButtonClick);


### 9. Real - world Example - Higher - Order Function:


// Using a higher-order function to filter data
function filterByLength(length) {
    return function (item) {
        return item.length === length;
    };
}

let words = ["apple", "banana", "orange", "grape"];
let filterByFive = words.filter(filterByLength(5));  // ["apple", "grape"]


### 10. Real - world Example - Asynchronous Function:


// Simulating an asynchronous function with setTimeout
function simulateAsyncOperation(callback) {
    setTimeout(callback, 1000);
}

simulateAsyncOperation(() => {
    console.log("Async operation complete!");
});

