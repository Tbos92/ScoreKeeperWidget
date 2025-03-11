const p1Button = document.getElementById("p1Button");
const p2Button = document.getElementById("p2Button");
const resetBtn = document.getElementById("reset");
const winningScoreSelect = document.getElementById("playto");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;

let gameOver = false;

p1Button.addEventListener("click", () => {
  console.log("you selected p1Button");
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      gameOver = true;
      p1Display.classList.add("winner");
      p2Display.classList.add("loser");
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", () => {
  console.log("you selected p2Button");
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      gameOver = true;
      p2Display.classList.add("winner");
      p1Display.classList.add("loser");
    }
    p2Display.textContent = p2Score;
  }
});

resetBtn.addEventListener("click", reset);

function reset() {
  p1Display.textContent = p1Score = 0;
  p2Display.textContent = p2Score = 0;

  p1Display.classList.remove("winner", "loser");
  p2Display.classList.remove("winner", "loser");

  gameOver = false;
}

winningScoreSelect.addEventListener("change", function () {
  console.log(this.value);

  winningScore = parseInt(this.value);
  reset();
});
