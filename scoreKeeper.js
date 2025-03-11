let p1Score = 0;
let p2Score = 0;

// const setScore = document.getElementById("playto");

let winningScore = 5;

let gameOver = false;

const p1Button = document.getElementById("p1Button");
p1Button.addEventListener("click", (event) => {
  console.log("you selected p1Button");
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

const p2Button = document.getElementById("p2Button");
p2Button.addEventListener("click", (event) => {
  console.log("you selected p2Button");
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", (event) => {
  console.log("you selected resetBtn");
  p1Score = 0;
  p2Score = 0;

  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
});

winningScore.addEventListener("input", (event) => {
  winningScore = event.target.value;
});
