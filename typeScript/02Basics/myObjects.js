"use strict";
exports.__esModule = true;
var User = {
    name: "Rahul",
    email: "r@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
} //passing a object
//createUser({name:"rahul",isPaid:true})
//createUser({name:'rohit',isPaid:true,email:"rohit@gmail.com"}) //It will show an error but if you pass it in a variable it will not
var user = { name: 'rohit', isPaid: true, email: "rohit@gmail.com" };
createUser(user);
function createCourse() {
    return { name: 'reactjs', price: 399 };
}
createCourse();
function createNewUser(user) {
    return { name: user.name, email: user.email, isActive: user.isActive };
}
createNewUser({ name: "rahulsingh", email: "singh@gmail.com", isActive: false });
var person = {
    _id: "12334",
    name: 'rahul',
    email: "rahul@gma.com",
    isActive: true
};
// person._id = '233321'         //Will show an error hover everytime on variable it will show details  
person.email = 'r@gmail.com';
