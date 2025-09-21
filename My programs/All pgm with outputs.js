class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log('${this.name} makes a sound.');
    }
}
undefined
console.log('Start');
setTimeout(() => {
console.log('This happens later!');
}, 1000);
console.log('End');
VM108:1 Start
VM108:5 End
undefined
VM108:3 This happens later!
let name = "John"; // Using 'let', can be reassigned
const age = 25; // Using 'const', cannot be reassigned
// Reassigning 'let' variable
name = "Alice";
console.log(name); // Output: Alice
console.log(age);
VM112:5 Alice
VM112:6 25
undefined
let name = "Kaaveri"; // Using 'let', can be reassigned
const age = 24; // Using 'const', cannot be reassigned
// Reassigning 'let' variable
name = "Alice";
console.log(name); // Output: Alice
console.log(age);
VM128:5 Alice
VM128:6 24
undefined
let name = "John"; // Using 'let', can be reassigned
const age = 25; // Using 'const', cannot be reassigned
// Reassigning 'let' variable
name = "kaaveri";
console.log(name); // Output: Alice
console.log(age);
VM143:5 kaaveri
VM143:6 25
undefined
let message = "Hello, World!"; 
let score = 100; 
let isCompleted = true; 
let unknown; 
let emptyValue = null; 
console.log(typeof message); 
console.log(typeof score); 
console.log(typeof isCompleted); 
console.log(typeof unknown); console.log(typeof emptyValue);
VM278:6 string
VM278:7 number
VM278:8 boolean
VM278:9 undefined
VM278:9 object
undefined
let message = "Hello, World!"; 
let score = 100; 
let isCompleted = true; 
let unknown; 
let emptyValue = null; 
console.log(typeof message); 
console.log(typeof score); 
console.log(typeof isCompleted);  
console.log(typeof unknown);
console.log(typeof emptyValue);
VM294:6 string
VM294:7 number
VM294:8 boolean
VM294:9 undefined
VM294:10 object
undefined
let person = { name: "John", age: 25 }; 
let numbers = [1, 2, 3, 4, 5]; 
console.log(person.name); // 
console.log(numbers[2]); // 
VM304:3 John
VM304:4 3
undefined
let person = { name: "John", age: 25 };
let numbers = [1, 2, 3, 4, 5]; 
console.log(person.name); 
console.log(numbers[2]);
VM349:3 John
VM349:4 3
undefined
let person = { name: "John", age: 25 }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array
console.log(person.age); // Output: John
console.log(numbers[5]); // Output: 3
VM385:3 25
VM385:4 undefined
undefined
let person = { name: "John", age: 25 }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array
console.log(person.age); // Output: John
console.log(numbers[4]); // Output: 3
VM389:3 25
VM389:4 5
undefined
let x = 10;
let y = 5;
console.log(x + y); 
console.log(x > y); 
console.log(x === 10 && y === 5);
VM393:3 15
VM393:4 true
VM393:5 true
undefined
function greet(name) {
return "Hello, " + name;
}
// Calling the function
let greeting = greet("Alice");
console.log(greeting);
VM397:6 Hello, Alice
undefined
let score = 85;
if (score > 90) {
console.log("Excellent");
} else if (score > 70) {
console.log("Good");
} else {
console.log("Needs Improvement");
}
VM401:5 Good
undefined
let result = "";
let i = 0;

do {
  i += 1;
  result += i;
} while (i < 5);

console.log(result);
VM451:9 12345
undefined
while (i < 10) {
  text += "The number is " + i;
  i++;
}
VM455:2 Uncaught ReferenceError: text is not defined
    at <anonymous>:2:3
(anonymous) @ VM455:2Understand this error
for (let i = 0; i < 5; i++)  
{
console.log("Iteration: " + i);
}
VM459:3 Iteration: 0
VM459:3 Iteration: 1
VM459:3 Iteration: 2
VM459:3 Iteration: 3
VM459:3 Iteration: 4
undefined
let globalVar = "I'm global";
function scopeTest() {
let localVar = "I'm local";
console.log(globalVar); 
console.log(localVar); 
}
scopeTest();
console.log(globalVar);
console.log(localVar);
VM485:4 I'm global
VM485:5 I'm local
VM485:8 I'm global
VM485:9 Uncaught ReferenceError: localVar is not defined
    at <anonymous>:9:13
(anonymous) @ VM485:9Understand this error
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);
VM491:3 (3) ['apple', 'banana', 'orange']
undefined
let fruits = ["apple", "banana", "orange"];
let lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);
VM495:3 orange
VM495:4 (2) ['apple', 'banana']
undefined
let fruits = ["apple", "banana"];
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);
VM499:3 apple
VM499:4 ['banana']
undefined
let fruits = ["banana"];
fruits.unshift("apple");
console.log(fruits);
VM503:3 (2) ['apple', 'banana']
undefined
let fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1, "grapes"); 
console.log(fruits);
VM511:3 (3) ['apple', 'grapes', 'orange']
undefined
let fruits = ["apple", "banana", "orange"];
let citrus = fruits.slice(1, 2);
console.log(citrus);
VM518:3 ['banana']
undefined
let fruits = ["apple", "banana", "orange"];
fruits.forEach(function(fruit) {
console.log(fruit);
});
VM522:3 apple
VM522:3 banana
VM522:3 orange
undefined