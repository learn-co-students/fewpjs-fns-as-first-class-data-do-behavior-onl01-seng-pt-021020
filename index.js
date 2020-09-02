/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let inputtedTime = time.split(':');
  let timeResult = inputtedTime.join("");
  let formattedTime = parseInt(timeResult);

  if (formattedTime < 1200) {
    return "Good Morning";
  }
  else if (formattedTime > 1700) {
    return "Good Evening";
  }
  else {
    return "Good Afternoon";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let element = document.getElementById('greeting');
  element.innerText = message;
}

