
var num1 = prompt("Enter first Number");
var operator = prompt("Enter the operator");
var num2 = prompt("Enter second Number");
var ans;

function add(){
    return ans = Number (num1) + Number (num2);
}
function subtract(){
    return ans = Number (num1) - Number (num2);
}
function multiply(){
    return ans = Number (num1) * Number (num2);
}
function divide(){
    return ans = Number (num1) / Number (num2);
}

if (operator === "+"){
    add();
}
else if (operator === "-"){
    subtract();
}
else if (operator === "*"){
    multiply();
}
else if (operator === "/"){
    divide();
}
else {
    alert ("Invalid Operator");
}

alert ("Your answer is: " +ans);