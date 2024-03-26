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
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}

//Test case
calculateDemeritPoints(80); 