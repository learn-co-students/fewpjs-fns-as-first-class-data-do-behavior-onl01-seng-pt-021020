/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString) {
  let theHour = parseInt(timeString.split(":")[0]);
  if (theHour < 12) {
    return "Good Morning";
  } else if (theHour >= 12 && theHour < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}