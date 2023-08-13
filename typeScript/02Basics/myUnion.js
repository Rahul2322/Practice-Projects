var score = 33;
score = "333";
var rahul = { name: "", id: 2 };
rahul = { username: "", id: 45 };
// function getDbId(id: number | string){
//     console.log(`Db Id is ${id}`);
// }
getDbId(9);
getDbId("tetet");
function getDbId(id) {
    //   id.toLowerCase()    //not possible its both string and number when hover it will show to handle it do type checking
    if (typeof id === "string") {
        id.toLocaleLowerCase(); //here it will allow since  we have specified it is a string i.e 100% string
    }
}
//array
var data = ["aa", "bb", "cc"];
var data1 = [1, 2, 3];
var data3 = ["aa", 2, 3];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"  






