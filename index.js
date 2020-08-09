/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  const time_split = time.split(':');
  const hour = parseInt(time_split[0]);
  const minute = parseInt(time_split[1]);

  if (hour < 12) {
    return 'Good Morning'
  } else if (hour < 17) {
    return 'Good Afternoon'
  } else if (hour == 17 && minute == 0) {
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  }
}

function displayMessage(message) {
  document.querySelector('h1#greeting').innerText = message
}