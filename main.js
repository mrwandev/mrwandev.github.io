function bars(x) {
    x.classList.toggle("change");
};

function goBack() {
    window.history.back();
};

function timer(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10)
    seconds = `${seconds}`;
 // seconds = `0${seconds}`;

//return `${minutes}:${seconds}`;
  return `${seconds}`;
};

let timerInterval = null;
let timePassed = 0;
var secondsStr;

export function redirectWithTimer(_time, direction, directionStr) {
  const time = _time + 1;
  let timeLeft = time;
  timerInterval = setInterval(() => {
    
    // The amount of time passed increments by one
    timePassed = timePassed += 1;
    timeLeft = time - timePassed;

    if(direction == "")
      direction = "http://mrwandev.github.io/junkyard";

    if(directionStr == "")
          directionStr = "the junkyard";
        
    if(timeLeft == 0)
    	window.location.replace(direction);
    
    if(timeLeft > 1 || timeLeft == 0) {
    	secondsStr = " seconds";
    }
    else if (timeLeft == 1){
    	secondsStr = " second";
    }

	document.getElementById("text").innerHTML = "u will be redirected to " + directionStr + " in " + timer(timeLeft) + secondsStr;
  }, 1000);
};