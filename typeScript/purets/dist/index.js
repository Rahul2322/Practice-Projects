"use strict";
//console.log("This is typescript here")
// class User {
//     email: string
//     name: string
//     readonly city:string =  ""
//     constructor(email: string , name: string){
//       this.email = email,
//       this.name = name
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const rahul = new User('rahul@g.com', 'rahul');
