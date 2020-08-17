/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  const parsed = parseInt(time);
  if (parsed < 12) return "Good Morning";
  if (parsed > 17) return "Good Evening";
  if (parsed > 11 && 17 > parsed) return "Good Afternoon";
}


/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let h1 = document.getElementById("greeting");
  h1.innerText = message;
}