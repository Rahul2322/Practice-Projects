let score: number | string = 33 

score = "333"

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let rahul: User | Admin = {name:"",id:2}

rahul = {username:"",id:45}




// function getDbId(id: number | string){
//     console.log(`Db Id is ${id}`);
    
// }

getDbId(9)
getDbId("tetet")

function getDbId(id: number | string){
//   id.toLowerCase()    //not possible its both string and number when hover over  it will show how to handle it, does type checking

if(typeof id === "string"){
    id.toLocaleLowerCase()         //here it will allow since  we have specified it is a string i.e 100% string
}
    
}


//array

let data: string[] = ["aa","bb","cc"]
let data1: number[] = [1,2,3]
let data3: (string | number)[] = ["aa",2,3]


let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"  

export{}