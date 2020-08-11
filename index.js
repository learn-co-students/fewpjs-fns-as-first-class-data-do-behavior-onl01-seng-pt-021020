/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  // split *timeString* and convert to an integer
  let time = (timeString).split(":")
  let hour = parseInt(time[0])
  // write conditional greeting
  if (hour < 12 ) {
    return "Good Morning";
  } else if ((hour >= 12) && (hour <= 17)) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(msg) {

  // Directly set return value of greet() as innerText
  console.log(document.getElementById('greeting').innerText = msg)
}
