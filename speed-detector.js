//calcuating the speed 
function speedDetector() {
    const prompt = require("prompt-sync")()
    let speed = prompt("Enter the speed: ")//prompts user to enter speed
    if (speed <= 70) {//if statement 
        console.log("Ok"); 
    }else if (speed > 70) {
        let demeritPoint = ((speed-70)/5)//this calculates the demerit points after user input
        console.log("Points :" + demeritPoint);
        if (demeritPoint > 12) {
            console.log("License suspended");
        }
    }else {
        console.log("invalid");
    }
}speedDetector()//calling back the function