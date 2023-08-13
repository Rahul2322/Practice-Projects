const User = {
    name:"Rahul",
    email:"r@gmail.com",
    isActive:true
}

function createUser({name: string,isPaid: boolean}){}  //passing a object

//createUser({name:"rahul",isPaid:true})

//createUser({name:'rohit',isPaid:true,email:"rohit@gmail.com"}) //It will show an error but if you pass it in a variable it will not
let user = {name:'rohit',isPaid:true,email:"rohit@gmail.com"};
createUser(user)

function createCourse():{name: string,price: number}{  //returning a object
    return {name:'reactjs',price:399}
}

createCourse()


//type Aliases

type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createNewUser(user: User): User{
 return {name:user.name,email:user.email,isActive:user.isActive}
}

createNewUser({name:"rahulsingh",email:"singh@gmail.com",isActive:false})





type NewUser = {
    readonly _id: string,     //read only does not allow to manipulate the value
    name: string
    email: string
    isActive: boolean
    isRegistered?: boolean        //The ? before specifying type suggests it is not mandatory to pass typescript will not show error if not pass
}

let person:NewUser = {
    _id: "12334",
    name: 'rahul',
    email: "rahul@gma.com",
    isActive: true
}

// person._id = '233321'         //Will show an error hover everytime on variable it will show details  
person.email = 'r@gmail.com'


type CardNumber = {
    cardnumber: string
}

type CardDate = {
    carddate: number
}

type CardDetails = CardNumber & CardDate  //here we can define type by combining two types

export {}