// Code your solution in this file!
let headquaters = 42;
function distanceFromHqInBlocks(location) {
  if (location < headquaters) {
    let distance = headquaters - location;
    return distance;
  } else if (location > headquaters) {
    let distance = location - headquaters;
    return distance;
  }
}
// let distanceInFeet;
// function distanceFromHqInFeet(start, destination){
//     function distanceFromHqInBlocks(location) {
//         if (location < headquaters) {
//           let distance = headquaters - location;
//           return distance;
//         } else if (location > headquaters) {
//           let distance = location - headquaters;
//           return distance;
//         }
// }
// }
function distanceFromHqInFeet (distance) {
    return distanceFromHqInBlocks(distance)*264;
}

function distanceTravelledInFeet(start, destination){
    if(start > destination){
        let distanceInFeet = (start - destination) * 264;
        return distanceInFeet;
    }else{
        let distanceInFeet = (destination - start) * 264;
        return (distanceInFeet);
    }
    
}

function calculatesFarePrice(start, destination){
    let totalDistance = distanceTravelledInFeet(start, destination);
    if(totalDistance < 400){
        return 0;
    }else if(totalDistance >= 400 && totalDistance <= 2000){
        return (totalDistance - 400) * (2/100);
    }else if (totalDistance > 2000 && totalDistance <= 2500){
        return 25;
    }else if(totalDistance > 2500){
        return 'cannot travel that far';
    }
}