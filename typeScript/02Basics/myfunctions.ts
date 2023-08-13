//Avoid using any then what is the use of type checking

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



function signUpUser(name: string,email: string,isPaid: boolean = false){} //If provided default value no error
signUpUser('r','r')



function addTwo(num: number):number{     //here i am specifying what type needs to be returned.One should always specify the return type
    return num + 2
}


// const arr = ['a','b','c'];
const arr = [1,2,3];

// arr.map(item=>{
//     return `aphabets ${item}`   //If you will hover over item it will specify the return type but you can specify the return type yourself like item:string.typescript is smart
// })

arr.map((item:number)=>{
    return `aphabets ${item}`
})


const consoleError = (errMsg:string):void=>{ //void means i am not returning anything
console.log(errMsg)
}


//The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program
const handleError = (errMsg:string):never=>{
    throw new Error(errMsg);
}

export {}