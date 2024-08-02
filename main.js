//Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

function toSec(frames, min) {
    const sec = min * (frames * 60)
    
    return sec;
}
console.log(toSec(1, 1));
console.log(toSec(10, 1));
console.log(toSec(10, 25));