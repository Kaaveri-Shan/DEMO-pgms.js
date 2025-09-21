Push
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);

VM491:3 (3) ['apple', 'banana', 'orange']

Pop
let fruits = ["apple", "banana", "orange"];
let lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);

VM495:3 orange
VM495:4 (2) ['apple', 'banana']

Shift
let fruits = ["apple", "banana"];
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);

VM499:3 apple
VM499:4 ['banana']

unshift
let fruits = ["banana"];
fruits.unshift("apple");
console.log(fruits);

VM503:3 (2) ['apple', 'banana']

Splice 
let fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1, "grapes"); 
console.log(fruits);

VM511:3 (3) ['apple', 'grapes', 'orange']

Slice 
let fruits = ["apple", "banana", "orange"];
let citrus = fruits.slice(1, 2);
console.log(citrus);

VM518:3 ['banana']

Foreach 
let fruits = ["apple", "banana", "orange"];
fruits.forEach(function(fruit) {
console.log(fruit);
});
VM522:3 apple
VM522:3 banana
VM522:3 orange
