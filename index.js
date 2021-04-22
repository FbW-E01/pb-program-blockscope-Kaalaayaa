// # On the block

// #### 1. Updater
// * Depending on the value of a variable (determiner), assign a value to `x`. 
//     - If determiner is less than 0, `x`'s value should be "Less than 0"
//     - If determiner is greater or equal 0, `x`'s value should "Greater or equal to 0".
const determiner1 = 2;
let x; 

if (determiner1 < 0){
    x = "Less than 0";
}
else if (determiner1 >= 0){
    x = "Greater or equal to 0";
}
console.log(x);
// #### 2. New Variables 
// * Depending on the value of the determiner, assign a value to another variable (`updater`) and create another variable.
//     - If determiner is greater of equal to 0, `updater`'s value should be "Greater or equal to 0" and create another variable called `message`, assign a value of "Positive Integer" and print message. 
//     - If determiner is less than 0, `updater`'s value should be "Less than 0".
const determiner2 = 5;
let updater;
if (determiner2 >= 0){
    updater = "Greater or equal to 0";
    const message ="Positive Integer";
    console.log(message);
} else{
    updater = "Less than 0";
} 
console.log(updater);
// * **Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
// console.log(message) here outside the block will make a ReferenceError because message is defined only inside the block

// console.log(message) here outside the block will make a ReferenceError because message is defined only inside the block

// #### 3. Ternary v.s. If statement 
// * When do you use a ternary v.s. an if statement? Give an example.