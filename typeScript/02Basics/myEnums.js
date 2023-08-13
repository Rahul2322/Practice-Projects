//By Default if you dont assign a value it will assign number ascendingly.To see hover over it
// enum SeatChoice {
//  AISLE,
//  MIDDLE,
//  WINDOW,
//  FOURTH
// }
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 2] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 3] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 4] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;
