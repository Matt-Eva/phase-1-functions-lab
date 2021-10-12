// Code your solution in this file!
/* you can use Math.abs() to return the absolute value of a difference.
function distanceFromHqInBlocksTwo(address) {
return Math.abs(address - 42);
}*/
const hq = 42;

function distanceFromHqInBlocks(address){
    if (address > hq) {
        return address - hq;
    } else {
        return hq - address;
    }
}

function distanceFromHqInFeet(address){
   return distanceFromHqInBlocks(address)*264;
}

function distanceTravelledInFeet(address1, address2){
    if (address1 > address2) {
        return (address1 - address2) * 264;
    } else {
        return (address2 - address1) * 264;
    }
 }

 function calculatesFarePrice(address1, address2) {
    let travel = distanceTravelledInFeet(address1, address2);
    if (travel < 400) {
        return 0;
    } else if (travel <= 2000 ) {
        return ((travel - 400) * .02);
    } else if (travel <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
 }

