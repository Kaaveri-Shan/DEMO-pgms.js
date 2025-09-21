let globalVar = "I'm global";
function scopeTest() {
let localVar = "I'm local";
console.log(globalVar); 
console.log(localVar); 
}
scopeTest();
console.log(globalVar);
console.log(localVar);