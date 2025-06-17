function updateTimer() {
  const timerElement = document.getElementById("timer");
  const now = new Date();
  const formattedTime = now.toLocaleString(); // Example: 6/17/2025, 10:30:45 PM
  timerElement.textContent = formattedTime;
}

// Call once immediately
updateTimer();

// Then update every second
setInterval(updateTimer, 1000);

