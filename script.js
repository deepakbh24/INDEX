// Select DOM elements
const box = document.getElementById("box");
const result = document.getElementById("result");

let startTime;

// Generate random position and show box
function showBox() {
  const top = Math.random() * (window.innerHeight - 120);
  const left = Math.random() * (window.innerWidth - 120);
  const color = '#' + Math.floor(Math.random()*16777215).toString(16); // Random color

  box.style.top = `${top}px`;
  box.style.left = `${left}px`;
  box.style.backgroundColor = color;
  box.style.display = "block";

  startTime = Date.now();
}

// Delay before showing box
function delayBox() {
  box.style.display = "none";
  const delay = Math.random() * 3000 + 1000; // 1s–4s delay
  setTimeout(showBox, delay);
}

// Reaction on click
box.onclick = function () {
  const endTime = Date.now();
  const reactionTime = ((endTime - startTime) / 1000).toFixed(3);
  result.textContent = `Your reaction time: ${reactionTime} seconds`;
  delayBox(); // Restart
};

// Start the first round
delayBox();
