// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let blocks;
    return blocks = Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue);
    let hqFeet;

    return hqFeet = blocks * 264;

}

function distanceTravelledInFeet(start, destination) {
    let feet;
    return feet = Math.abs(start - destination) * 264;


}
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;

    } else if (distance <= 2000) {

        let money = (distance - 400) * .02

        return money;

    } else if (distance <= 2500 && distance > 2000) {
        let difference = 2500 - distance;

        let newmoney = 25;
        return newmoney;

    } else {
        return 'cannot travel that far';

    }






}