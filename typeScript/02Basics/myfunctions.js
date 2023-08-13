"use strict";
//Avoid using any then what is the use of type checking
exports.__esModule = true;
//If you not pass what type should be a parameter it will take the value in funct without throwing any error as it takes any
// function addTwo(num){    
//     return num + 2
// }
// addTwo("2")
// function addTwo(num: number){    
//     return num + 2
// }
//addTwo("str")  -->it will show an error
// addTwo(2)
// function getUpperValue(val){
//     return val.toUpperCase()
// }
// getUpperValue(4)  //it will not show an error so its important to define type
// function signUpUser(name: string,email: string,isPaid: boolean){}
// // signUpUser(1,2,'st')
// //signUpUser('r','r') //Ot will throw an error
// signUpUser('r','r',true)
function signUpUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
} //If provided default value no error
signUpUser('r', 'r');
function addTwo(num) {
    return num + 2;
}
// const arr = ['a','b','c'];
var arr = [1, 2, 3];
// arr.map(item=>{
//     return `aphabets ${item}`   //If you will hover over item it will specify the return type but you can specify the return type yourself like item:string.typescript is smart
// })
arr.map(function (item) {
    return "aphabets ".concat(item);
});
var consoleError = function (errMsg) {
    console.log(errMsg);
};
//The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program
var handleError = function (errMsg) {
    throw new Error(errMsg);
};
