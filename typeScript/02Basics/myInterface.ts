interface User {
 readonly dbId : number,
 email: string,
 userId: number,
 googleId?: number,
 startTrial(): string,
 getCoupon(couponName: string): number
}

// const rahul: User = {
//     dbId:24,
//     email:"rahul@g.com",
//     userId: 1,
//     startTrial:()=>{
//         return "rahul"
//     },
//     getCoupon:(name:"rahul")=>{
//         return 1
//     }
// } 

// rahul.email = "r10@g.com"



// We can overwrite interface known as "reopening of interface"

interface User {
    gitHubtoken: string
}

const rahul: User = {
    dbId:24,
    email:"rahul@g.com",
    userId: 1,
    startTrial:()=>{
        return "rahul"
    },
    getCoupon:(name:"rahul")=>{
        return 1
    },
    gitHubtoken: "rohit"
} 

rahul.email = "r10@g.com"

//We can  alos inherit interface 

interface Admin extends User {
    role: string
}


const admin: Admin = {
    dbId : 1,
    email:"admin@g.com",
    userId:1,
    startTrial:()=>{
        return "Admin"
    },
    getCoupon(name:"Admin") {
        return 1
    },
    gitHubtoken: "admin",
    role:'admin'
}
export {}