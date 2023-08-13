/* 
A tuple is a typed array with a pre-defined length and types for each index.

Tuples are great because they allow each element in the array to be a known type of value.

To define a tuple, specify the type of each element in the array:
*/


let user: [number,string] 

user = [12,"abc"]

type  User = [string , number , boolean]

let newUser: User = ["cbs",123,true]