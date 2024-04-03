//Speed detector
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritPointsThreshold = 12;

    if (speed <= speedLimit) {
        console.log("Points: 0");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > demeritPointsThreshold) {
            return"License suspended";
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}

//Test case
console.log(calculateDemeritPoints(80)); 
console.log(calculateDemeritPoints(100));
console.log(calculateDemeritPoints(400));