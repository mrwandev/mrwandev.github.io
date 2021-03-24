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

function redirectWithTimer(_time, direction, directionStr) {
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

function usePassword(usePasswordBool){
    var usePasswordBool;
    var password = "mrwan69";
    var entredPass = "";

    if(usePasswordBool){
        var blockPanel = document.createElement("div");
        blockPanel.setAttribute('style', 'width: 100%; height: 100%; background-color: #131313; position: fixed;');
        blockPanel.setAttribute('id', 'block');

        var paragraph = document.createElement("p");
        paragraph.setAttribute('id', 'para');
        paragraph.setAttribute('style', 'color: white');
        var text = document.createTextNode("enter password");
        paragraph.appendChild(text);
        blockPanel.prepend(paragraph);

        var passwordInput = document.createElement("input");
        passwordInput.setAttribute('id', 'passwordInputID');
        passwordInput.setAttribute('type', 'text');

        var body = document.getElementById("bodyy");
        body.setAttribute('style', 'background-color: #131313');
        body.prepend(blockPanel);
        blockPanel.appendChild(paragraph);
        blockPanel.appendChild(passwordInput);
    }
    

    update = setInterval(() => {
    var body = document.getElementById("bodyy")
    var blockPanel = document.getElementById("block");

    if(blockPanel == null)
    {
        var blockPanel = document.createElement("div");
        blockPanel.setAttribute('style', 'width: 100%; height: 100%; background-color: #131313; position: fixed;');
        blockPanel.setAttribute('id', 'block');
        body.prepend(blockPanel);
    }
    else
        blockPanel = document.getElementById("block");

    var paragraph = document.getElementById("para");

    if(paragraph == null)
    {
        var paragraph = document.createElement("p");
        paragraph.setAttribute('id', 'para');
        paragraph.setAttribute('style', 'color: white');
        var text = document.createTextNode("enter password");
        paragraph.appendChild(text);
        blockPanel.prepend(paragraph);
    }
    else
        paragraph = document.getElementById("para");

    var passwordInput = document.getElementById("passwordInputID");

    if(passwordInput == null)
    {
        var passwordInput = document.createElement("input");
        passwordInput.setAttribute('id', 'passwordInputID');
        passwordInput.setAttribute('type', 'text');
        blockPanel.prepend(paragraph);
        blockPanel.appendChild(passwordInput);
    }
    else
        entredPass = document.getElementById("passwordInputID").value;

    if(entredPass == password){
        body.setAttribute('style', 'background-color: white');
        body.removeChild(blockPanel);
        clearInterval(update);
    }
  }, 0);
};